import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwIA4n-SPBCZPy7nyuSWjH_HegfX_9HII",
  authDomain: "house-marketplace-app-ca0a3.firebaseapp.com",
  projectId: "house-marketplace-app-ca0a3",
  storageBucket: "house-marketplace-app-ca0a3.appspot.com",
  messagingSenderId: "54618472424",
  appId: "1:54618472424:web:908f40e8bf8f022c98ee5d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore() 