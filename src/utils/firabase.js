import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3JRATISdg1r6pZbIqkar7txUxe5vAFz0",
  authDomain: "todo-db-e9308.firebaseapp.com",
  projectId: "todo-db-e9308",
  storageBucket: "todo-db-e9308.appspot.com",
  messagingSenderId: "872076600173",
  appId: "1:872076600173:web:4bdb3e4365a2d32bb37064"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)