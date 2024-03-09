import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm9O2SGxMNBG94G0TlN1YRetYMbKl_-5w",
  authDomain: "netflix-clone-f7af6.firebaseapp.com",
  projectId: "netflix-clone-f7af6",
  storageBucket: "netflix-clone-f7af6.appspot.com",
  messagingSenderId: "1080052489558",
  appId: "1:1080052489558:web:9aba54bf73704198988af7",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
