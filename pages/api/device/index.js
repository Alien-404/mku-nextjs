import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../src/config/firebase';

export default async function handler(req, res) {
  let response = {
    message: 'the request has been processed successfully on the server',
    data: [],
  };
  if (req.method === 'GET') {
    const querySnapshot = await getDocs(collection(db, 'device'));
    if (!querySnapshot.empty) {
      querySnapshot.forEach((d) => {
        response.data.push({ ...d.data(), id: d.id });
      });
      res.status(200).json(response);
    } else {
      res.status(204).end();
    }
  } else {
    response.message = 'we only accept GET method.';
    res.status(405).json(response);
  }
}
