// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBa826Zv81HRvDg0qmXRTwtGCKhw4LLfm8",
  authDomain: "fir-60352.firebaseapp.com",
  projectId: "fir-60352",
  storageBucket: "fir-60352.appspot.com",
  messagingSenderId: "740517186834",
  appId: "1:740517186834:web:65d9eddf26b7bebc41f7cb",
  measurementId: "G-L5VC1PCD7X"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
export{db, auth};