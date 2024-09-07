import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzixtwby__mu11hFpRDf4jU8oyHNlRrQI",
  authDomain: "e-clone-9f43d.firebaseapp.com",
  projectId: "e-clone-9f43d",
  storageBucket: "e-clone-9f43d.appspot.com",
  messagingSenderId: "484102981936",
  appId: "1:484102981936:web:fcde3197340f8ac55c60f5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
