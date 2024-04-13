import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "frontendarena.firebaseapp.com",
  projectId: "frontendarena",
  storageBucket: "frontendarena.appspot.com",
  messagingSenderId: "866304277005",
  appId: "1:866304277005:web:bd1559cb93d4328429f344"
};

export const app = initializeApp(firebaseConfig);