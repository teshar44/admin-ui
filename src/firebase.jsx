import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-6fde1.firebaseapp.com",
  projectId: "store-tutorial-6fde1",
  storageBucket: "store-tutorial-6fde1.appspot.com",
  messagingSenderId: "448122370711",
  appId: "1:448122370711:web:ec137d9c482942ef5787d2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const  db = getFirestore(app);
export const storage = getStorage(app);