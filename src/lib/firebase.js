// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "sreactchat.firebaseapp.com",
  projectId: "sreactchat",
  storageBucket: "sreactchat.firebasestorage.app",
  messagingSenderId: "217000112471",
  appId: "1:217000112471:web:ccab13d78912e21f228e12",
  measurementId: "G-K2NL1FDL75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)
export const db=getFirestore(app)