// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIuOB6nz5jVvFnOOjgPQlaoId0yzxmU4c",
  authDomain: "anshtask-63539.firebaseapp.com",
  projectId: "anshtask-63539",
  storageBucket: "anshtask-63539.appspot.com",
  messagingSenderId: "343312372865",
  appId: "1:343312372865:web:f6ba190887b654fbb2a980",
  measurementId: "G-BT8TR0DZB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };