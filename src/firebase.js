import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAnyjIViCWVpYZs5w0fwjllWfLz_wRSHNc",
  authDomain: "phayvanh-f4f13.firebaseapp.com",
  projectId: "phayvanh-f4f13",
  storageBucket: "phayvanh-f4f13.appspot.com",
  messagingSenderId: "1063731176636",
  appId: "1:1063731176636:web:b8e949547eacb7cf465cb9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);