import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpMg5d4kMmHdP36oR-Ltn2NEfM0I9Mztw",
  authDomain: "clone-7b90b.firebaseapp.com",
  projectId: "clone-7b90b",
  storageBucket: "clone-7b90b.appspot.com",
  messagingSenderId: "481342879038",
  appId: "1:481342879038:web:ae5f4c3675eb0a40ba286f",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export const createUserAuthUsingEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const singInAuthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedHandler = (callback) =>
  onAuthStateChanged(auth, callback);

export const signOutHandler = async () => await signOut(auth);
