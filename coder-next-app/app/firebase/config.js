import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfEg4cXCeM4wh9taEIgDPgChfBYEkDl-k",
  authDomain: "coder-next-app-60120.firebaseapp.com",
  projectId: "coder-next-app-60120",
  storageBucket: "coder-next-app-60120.appspot.com",
  messagingSenderId: "1073698782860",
  appId: "1:1073698782860:web:3d187b827070d5837c45a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )