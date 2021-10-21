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
export const dbRefLogTransfers = ref(database, '/Logs/Transfers');
export var transfersFromClass = []
export var releaseFromClass = []
export var equipmentFromClass = []



export const getEquipments = () => {
  try {
    onValue(dbRefEquipaments, (snapshot) => {
      const data = snapshot.val();
      Object.keys(data).forEach(function (key) {
        const equipament = {
          ...data[key], key
        }
        equipmentFromClass.push(equipament);
        console.log(data[key])
      });
      setTimeout(function () {
        return equipmentFromClass

      }, 5000);

    }, {
      onlyOnce: true
    });
  } catch (err) {
    console.log(err)
  }
}

export const getLogWarehouse = () => {
  releaseFromClass = [];

  try {
    onValue(dbRefLogWarehouse, (snapshot) => {
      const data = snapshot.val();
      Object.keys(data).forEach(function (key) {
        const equipament = {
          ...data[key], key
        }
        releaseFromClass.push(equipament);
      });
      setTimeout(function () {
        return releaseFromClass
      }, 5000);

    }, {
      onlyOnce: true
    });
  } catch (err) {
    console.log(err)
  }
}

export const getLogTransfers = () => {
  transfersFromClass = []
  try {
    onValue(dbRefLogTransfers, (snapshot) => {
      const data = snapshot.val();
      Object.keys(data).forEach(function (key) {
        transfersFromClass.push(data[key]);
      });
      return transfersFromClass
    });
  } catch (err) {
    console.log(err)
  }
}

export default app;