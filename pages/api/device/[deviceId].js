import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

export default async function handler(req, res) {
  // get device id from query
  const { deviceId } = req.query;
  // create the response
  let response = {
    message: 'the request has been processed successfully on the server',
    data: [],
  };
  // check if method GET
  if (req.method === 'GET') {
    // request to firestore
    const docref = doc(db, 'device', deviceId);
    const docSnap = await getDoc(docref);

    // check if exist
    if (docSnap.exists()) {
      // store the data to response
      response.data.push(docSnap.data());
      // send response
      res.status(200).json(response);
    } else {
      // send response
      res.status(204).end();
    }
  } else {
    // create message if wrong mthod
    response.message = 'we only accept GET method.';
    res.status(405).json(response);
  }
}
