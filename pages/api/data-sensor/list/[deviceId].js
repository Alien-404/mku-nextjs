import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import moment from 'moment';
import { db } from '../../../../config/firebase';

export default async function handler(req, res) {
  const { deviceId, startDate, endDate } = req.query;
  let response = {
    message: 'the request has been processed successfully on the server',
    data: [],
  };

  if (req.method === 'GET') {
    const deviceRef = doc(db, 'device', deviceId);
    // check if the query params is null
    if (
      (startDate != null && endDate == null) ||
      (startDate == null && endDate != null)
    ) {
      response.message =
        "the query params (startDate and endDate) both must be filled in, can't be empty";
      res.status(404).json(response);
    } else if (startDate == null && endDate == null) {
      // get only today data
      const docRef = collection(db, 'data_sensor');
      const today = moment().startOf('days').toDate();
      // make query
      const q = query(
        docRef,
        where('device_id', '==', deviceRef),
        where('created_at', '>', today),
        orderBy('created_at', 'desc')
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
      // end else if
    } else {
      const startAt = moment()
        .subtract(parseInt(startDate), 'day')
        .startOf('day')
        .toDate();
      const endAt = moment()
        .subtract(parseInt(endDate), 'day')
        .startOf('day')
        .toDate();

      const docRef = collection(db, 'data_sensor');
      // make query
      const q = query(
        docRef,
        where('device_id', '==', deviceRef),
        where('created_at', '>', endAt),
        where('created_at', '<', startAt),
        orderBy('created_at', 'desc')
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
      // end else logic
    }
  } else {
    response.message = 'we only accept GET method.';
    res.status(405).json(response);
  }
}
