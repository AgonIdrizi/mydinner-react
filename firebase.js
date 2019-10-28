import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNP5me3pdzq5ZjiY4cOhNbfbkkuCBnfJY",
  authDomain: "react-firebase-44579.firebaseapp.com",
  databaseURL: "https://react-firebase-44579.firebaseio.com",
  projectId: "react-firebase-44579",
  storageBucket: "react-firebase-44579.appspot.com",
  messagingSenderId: "891932276248",
  appId: "1:891932276248:web:394000368b5d4f85"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
