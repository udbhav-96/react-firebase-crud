import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJDikmIjV9SpXgHPDj5RCV1tlZQCvxwv0",
  authDomain: "react-firebase-crud-6e596.firebaseapp.com",
  projectId: "react-firebase-crud-6e596",
  storageBucket: "react-firebase-crud-6e596.appspot.com",
  messagingSenderId: "315392571890",
  appId: "1:315392571890:web:ac0b48758a873111afd36b"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, collection, addDoc, getDocs, updateDoc, deleteDoc };
