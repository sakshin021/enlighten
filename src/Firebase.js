import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXMmG0H0-1dBU7rD5VrRZ0l7JpwyE2uF4",
  authDomain: "enlighten-c01ea.firebaseapp.com",
  projectId: "enlighten-c01ea",
  storageBucket: "enlighten-c01ea.appspot.com",
  messagingSenderId: "605099886697",
  appId: "1:605099886697:web:aaff2bbe61aa9eae7b3af8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db};
