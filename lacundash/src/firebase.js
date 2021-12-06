// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASMhxmAvLxCQjK8R8j6H9Lbvu1V9xH108",
  authDomain: "lacundash.firebaseapp.com",
  projectId: "lacundash",
  storageBucket: "lacundash.appspot.com",
  messagingSenderId: "318094595593",
  appId: "1:318094595593:web:ba646294e2417f49364ad8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export default firebaseApp;
