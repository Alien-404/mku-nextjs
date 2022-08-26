import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../../src/config/firebase';

export default async function handler(req, res) {
  // create response data
  let response = {
    message: 'the request has been processed successfully on the server',
    data: [
      {
        type: 'FeatureCollection',
        features: [],
      },
    ],
  };
  let devices_id = [];

  if (req.method === 'GET') {
    //   get all device
    const devices = await getDocs(collection(db, 'device'));

    // check if data exist
    if (!devices.empty) {
      devices.forEach((device) => {
        devices_id.push({ ...device.data(), device_id: device.id });
      });

      // get all device data sensors
      if (devices_id.length > 0) {
        for (const deviceId of devices_id) {
          const docRef = collection(db, 'data_sensor');
          const deviceRef = doc(db, 'device', deviceId.device_id);

          // query
          const q = query(
            docRef,
            where('device_id', '==', deviceRef),
            orderBy('created_at', 'desc'),
            limit(1)
          );
          const querySnapshot = await getDocs(q);

          // check if not empty
          if (!querySnapshot.empty) {
            querySnapshot.forEach((d) => {
              response.data[0].features.push({
                type: 'Feature',
                properties: {
                  ...d.data(),
                  location: deviceId.device_location_name,
                  device_id_path: deviceId.device_id,
                },
                geometry: {
                  type: 'Point',
                  coordinates: [
                    deviceId.device_location_geo.longitude,
                    deviceId.device_location_geo.latitude,
                  ],
                },
              });
            });
          }
        } // end loops

        // send response
        res.status(200).json(response);
      } else {
        // response for empty data sensors
        res.status(204).end();
      }
    } else {
      // response for empty device
      res.status(204).end();
    }
  } else {
    response.message = 'we only accept GET method.';
    response.data = [];
    res.status(405).json(response);
  }
}
