
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAfiHQabcJDFFOn8IPnM4vxZWu5YgVKHys",
  authDomain: "tiktok---jornada-f8b59.firebaseapp.com",
  projectId: "tiktok---jornada-f8b59",
  storageBucket: "tiktok---jornada-f8b59.appspot.com",
  messagingSenderId: "1098837101560",
  appId: "1:1098837101560:web:cdc55a3fe82b8af409e40d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;