import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoL9WVwokl0FjSe7eCSYqVEOQlNhqMORQ",
    authDomain: "fitness-tracker-43d8a.firebaseapp.com",
    projectId: "fitness-tracker-43d8a",
    storageBucket: "fitness-tracker-43d8a.appspot.com",
    messagingSenderId: "434089531595",
    appId: "1:434089531595:web:5fe1306c2f254e9213e34e",
    measurementId: "G-2YN7VCZ4S4"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; 
