// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD1DCf02sZ7271ERnVYjKL_hbrIuSzT-I",
  authDomain: "hecwebsite-fdd31.firebaseapp.com",
  projectId: "hecwebsite-fdd31",
  storageBucket: "hecwebsite-fdd31.appspot.com",
  messagingSenderId: "511656632027",
  appId: "1:511656632027:web:2ee2bb246fc5ddc0fcf6fe",
  measurementId: "G-L1RNXMPVYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
