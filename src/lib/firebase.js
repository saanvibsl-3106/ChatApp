

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyZkj16NkP_K1t5peU-wcYBwGtpg3eyk",
  authDomain: "chatapp-693ef.firebaseapp.com",
  projectId: "chatapp-693ef",
  storageBucket: "chatapp-693ef.firebasestorage.app",
  messagingSenderId: "326668797707",
  appId: "1:326668797707:web:69427514c1d53ebdd5040e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFireStore(app);
// export const storage=getStorage(app);
