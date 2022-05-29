import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../../../config/firebase';

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
        response.data.push({ ...d.data(), doc_id: d.id });
      });
      res.status(200).json(response);
    }
  } else {
    response.message = 'we only accept GET method.';
    res.status(405).json(response);
  }
}
