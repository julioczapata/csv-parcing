// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXZ4UXQoh-UdyxGcHgD8bKO34NnOIWXlY",
  authDomain: "csv-parcing.firebaseapp.com",
  projectId: "csv-parcing",
  storageBucket: "csv-parcing.firebasestorage.app",
  messagingSenderId: "950554258427",
  appId: "1:950554258427:web:f6b9abb005e6b1aae6f95e",
  measurementId: "G-RJFSXPGWPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
