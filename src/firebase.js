import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC3Id_5sAo_ilqOVy0RBGE7qb9d0jBcb-4",
  authDomain: "authentication-6f782.firebaseapp.com",
  projectId: "authentication-6f782",
  storageBucket: "authentication-6f782.appspot.com",
  messagingSenderId: "765987501681",
  appId: "1:765987501681:web:103c7eebfd24e2cd694dd0",
  measurementId: "G-WT3CT35131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};