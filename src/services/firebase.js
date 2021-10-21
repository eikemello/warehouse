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
const dbRefLogTransfers = ref(database, '/Logs/Transfers/');


export const getEquipments = () => {
  var equipments = []

  try {
    onValue(dbRefEquipaments, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        const equipament = {
          ...childData, childKey
        }

        equipments.push(equipament)
      });
    }, {
      onlyOnce: true
    });
  } catch (err) {
    console.log(err)
  }
  return equipments
}

export const getLogWarehouse = () => {
  var logStock = []

  try {
    onValue(dbRefLogWarehouse, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        const log = {
          ...childData, childKey
        }

        logStock.push(log)
      });
    }, {
      onlyOnce: true
    });
  } catch (err) {
    console.log(err)
  }

  return logStock
}

export const getLogTransfers = () => {
  var transfers = []
  var jsonData
  try {
    onValue(dbRefLogTransfers, (snapshot) => {

      snapshot.forEach(function (data) {
        let userName = data.val().username;
        var childData = snapshot.val();
        jsonData = JSON.stringify(childData[data.key]);
        transfers.push(jsonData)
      });

      //transfers.push(childData);
     // var childData = snapshot.val();
    //  let test = childData['2021-05-13_10:02:35']
     // console.log(JSON.stringify(childData['Transfer']))

      //console.log("childData key > " + childData)

      //console.log("obj new > "+obj)
    });
  } catch (err) {
    console.log(err)
  }
  return transfers
}

export default app;