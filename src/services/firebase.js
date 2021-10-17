import { initializeApp } from 'firebase/app'

import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsbhH466rD067_2kH2-4e9yz2rfQ04lic",
  authDomain: "testejson-3ea18.firebaseapp.com",
  databaseURL: "https://testejson-3ea18.firebaseio.com",
  projectId: "testejson-3ea18",
  storageBucket: "testejson-3ea18.appspot.com",
  messagingSenderId: "153435537389",
  appId: "1:153435537389:web:58358f35c12b669af871e4"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const dbRefEquipaments = ref(database, '/Equipaments');
const dbRefLogWarehouse = ref(database, '/Logs/Warehouse');
export var logStock = []

export const getEquipaments = () => {
  const equipaments = []

  try {
    onValue(dbRefEquipaments, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        const equipament = {
          key: childKey,
          data: childData
        }

        equipaments.push(equipament)
      });
    }, {
      onlyOnce: true
    });
  } catch (err) {
    console.log(err)
  }

  console.log(equipaments)
  return equipaments
}

const getLogWarehouse = () => {
  logStock = []

  try {
    onValue(dbRefLogWarehouse, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
       // childData['date'] = childKey;

        const log = {
          //key: childKey,
          data: childData, 
        }

        logStock.push(log)
      });
    }, {
      onlyOnce: true
    });
  } catch (err) {
    console.log(err)
  }

  console.log(logStock)
}

getLogWarehouse()

export default app;