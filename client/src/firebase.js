// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9c67f.firebaseapp.com",
  projectId: "mern-blog-9c67f",
  storageBucket: "mern-blog-9c67f.appspot.com",
  messagingSenderId: "240963650173",
  appId: "1:240963650173:web:743418631f0dd6e91ba714",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
