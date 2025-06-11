// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcw1acfF3bCKU2SlnuZG9xIWgGI1whyO4",
  authDomain: "wedding-guestbook-81343.firebaseapp.com",
  projectId: "wedding-guestbook-81343",
  storageBucket: "wedding-guestbook-81343.firebasestorage.app",
  messagingSenderId: "439801325527",
  appId: "1:439801325527:web:b3fd7cd78b57668ad74d92",
  measurementId: "G-63NVDZ1DX2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
