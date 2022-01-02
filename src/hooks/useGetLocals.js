import React, {useEffect} from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

/*export const useGetLocals = async () => {
    const [locals, setLocals] = React.useState([]);

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
        measurementId: process.env.REACT_APP_measurementId,
      };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const localCol = collection(db, 'Local');
    const localSnapshot = await getDocs(localCol);
    const localList = localSnapshot.docs.map(doc => doc.data());

    return localList;
};*/

  

export const useGetLocals = () => {
    const [locals, setLocals] = React.useState([]);

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
        measurementId: process.env.REACT_APP_measurementId,
      };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

  async function getLocals(db) {
    const localCol = collection(db, 'Local');
    const localSnapshot = await getDocs(localCol);
    const localList = localSnapshot.docs.map(doc => doc.data());

    setLocals(localList);
  }

  useEffect(() => {
    getLocals(db);
  }, [db]);

  return locals;
};

