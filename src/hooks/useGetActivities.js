import React, {useEffect} from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const useGetActivities = () => {
    const [activities, setActivities] = React.useState([]);

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

  async function getActivities(db) {
    const activityCol = collection(db, 'Atividade');
    const activitySnapshot = await getDocs(activityCol);
    const activityList = activitySnapshot.docs.map(doc => doc.data());

    setActivities(activityList);
  }

  useEffect(() => {
    getActivities(db);
  }, [db]);

  return activities;
};

