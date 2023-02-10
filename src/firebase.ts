import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA5cfnI0ZwftCFNnugK_6WcI5Klmld0t4s",
  authDomain: "imdbooks.firebaseapp.com",
  projectId: "imdbooks",
  storageBucket: "imdbooks.appspot.com",
  messagingSenderId: "961091109134",
  appId: "1:961091109134:web:5b6d6f3f3b6806c033175f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
