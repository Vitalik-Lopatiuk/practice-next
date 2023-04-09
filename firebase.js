import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
export const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: 'AIzaSyA1pLi2l_QIi6LK5A1PDDJ-yegIdYjo1uA',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


const app = initializeApp(firebaseConfig);
