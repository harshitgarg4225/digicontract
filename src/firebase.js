// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhgewHpTHrgDZokNrwqP5Ol1FCyX3MJLs",
  authDomain: "digicontract-b214d.firebaseapp.com",
  projectId: "digicontract-b214d",
  storageBucket: "digicontract-b214d.appspot.com",
  messagingSenderId: "661187405146",
  appId: "1:661187405146:web:bb6609e2dc1900a689ff63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);
