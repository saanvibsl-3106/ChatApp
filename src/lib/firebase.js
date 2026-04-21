
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD65TNduLRU1Zl_6AmS5ad7A3aWo0SR6i8",
  authDomain: "finalreactchat-app.firebaseapp.com",
  projectId: "finalreactchat-app",
  storageBucket: "finalreactchat-app.firebasestorage.app",
  messagingSenderId: "1079695705884",
  appId: "1:1079695705884:web:5cedfaf9e02cca58925cd9",
  measurementId: "G-BY5YNQSF3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const db=getFirestore(app)
