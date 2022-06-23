import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpMg5d4kMmHdP36oR-Ltn2NEfM0I9Mztw",
    authDomain: "clone-7b90b.firebaseapp.com",
    projectId: "clone-7b90b",
    storageBucket: "clone-7b90b.appspot.com",
    messagingSenderId: "481342879038",
    appId: "1:481342879038:web:ae5f4c3675eb0a40ba286f"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);