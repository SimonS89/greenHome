import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiz6ivOPhl9-TBoBIQc2k0dghVRngWJuA",
  authDomain: "greenhome-2a113.firebaseapp.com",
  projectId: "greenhome-2a113",
  storageBucket: "greenhome-2a113.appspot.com",
  messagingSenderId: "316214145381",
  appId: "1:316214145381:web:625385ba2c42f9955db18c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);

export default db;
