import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuation
const firebaseConfig = {
  apiKey: "AIzaSyBz0MEd5Ftc5nXbAf3VJ_kIUuGGt2BkkuU",
  authDomain: "my-great-tutorial.firebaseapp.com",
  projectId: "my-great-tutorial",
  storageBucket: "my-great-tutorial.appspot.com",
  messagingSenderId: "959121656323",
  appId: "1:959121656323:web:3b56bdfc8d2175e3195c36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
