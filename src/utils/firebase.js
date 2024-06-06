import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx7XRCWBrCB2ruBfsbxm_OuG5yMisjNpQ",
  authDomain: "netflixgpt-3926d.firebaseapp.com",
  projectId: "netflixgpt-3926d",
  storageBucket: "netflixgpt-3926d.appspot.com",
  messagingSenderId: "1058026766262",
  appId: "1:1058026766262:web:8791e98295aa0b63f6cb17",
  measurementId: "G-7BGTET2MHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();