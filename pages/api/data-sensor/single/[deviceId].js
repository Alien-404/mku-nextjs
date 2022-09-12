import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../../../src/config/firebase';
import moment from 'moment';
import 'moment/locale/id';

export default async function handler(req, res) {
  const { deviceId } = req.query;
  let response = {
    message: 'the request has been processed successfully on the server',
    data: [],
  };
  if (req.method === 'GET') {
    const deviceRef = doc(db, 'device', deviceId);
    const docRef = collection(db, 'data_sensor');

    // make query
    const q = query(
      docRef,
      where('device_id', '==', deviceRef),
      orderBy('created_at', 'desc'),
      limit(1)
    );
    const querySnapshot = await getDocs(q);

    // check is have a data or not
    if (querySnapshot.empty) {
      // response for empty data sensors
      res.status(204).end();
    } else {
      querySnapshot.forEach((d) => {
        const date_times = d.data().created_at.seconds * 1000;
        response.data.push({
          ...d.data(),
          doc_id: d.id,
          date_time: moment(date_times).format('HH:mm:ss, MMM dddd Do YYYY'),
        });
      });
      const da = moment(1662967449 * 1000).format('HH:mm:ss');
      const di = moment(1662967449).format('HH:mm:ss');
      response.data.push({
        da,
        di,
      });
      res.status(200).json(response);
    }
  } else {
    response.message = 'we only accept GET method.';
    res.status(405).json(response);
  }
}
