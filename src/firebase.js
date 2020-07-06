import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIMZFe2d3kl42aecBCRnq6KwwAdxPOwiY",
  authDomain: "finance-manager-adb21.firebaseapp.com",
  databaseURL: "https://finance-manager-adb21.firebaseio.com",
  projectId: "finance-manager-adb21",
  storageBucket: "finance-manager-adb21.appspot.com",
  messagingSenderId: "734296946507",
  appId: "1:734296946507:web:f49ce99528a402b6e51ace",
  measurementId: "G-YZ4J7QFSD8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
