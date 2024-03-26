// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuYdP37Ws_xkDdwWJhhdF64rg4vejQd0w",
  authDomain: "netflix-gpt-2c23d.firebaseapp.com",
  projectId: "netflix-gpt-2c23d",
  storageBucket: "netflix-gpt-2c23d.appspot.com",
  messagingSenderId: "156219853209",
  appId: "1:156219853209:web:582a3af54ede1be3b66b08",
  measurementId: "G-KKL08YQJW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();