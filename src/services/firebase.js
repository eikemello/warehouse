import { initializeApp } from 'firebase/app'

// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsbhH466rD067_2kH2-4e9yz2rfQ04lic",
  authDomain: "testejson-3ea18.firebaseapp.com",
  databaseURL: "https://testejson-3ea18.firebaseio.com",
  projectId: "testejson-3ea18",
  storageBucket: "testejson-3ea18.appspot.com",
  messagingSenderId: "153435537389",
  appId: "1:153435537389:web:58358f35c12b669af871e4"
};

const app = initializeApp(firebaseConfig);

export default app;

// const { fireInit } = initializeApp(firebaseConfig);
// console.log(fireInit)
// const database = getDatabase(fireInit);
// console.log(database);

// try {
//   fireInit.database().ref("Equipaments").once('value').then(function (snapshot) {
//     console.log('teste database');
//     console.log(snapshot);
//   });
// } catch (err) {
//   console.log(err);
// }

// export default fireInit;