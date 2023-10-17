// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMbb1SjubWdwakDpG9ORxKEsg_WwoE9h0",
  authDomain: "brand-shop-client.firebaseapp.com",
  projectId: "brand-shop-client",
  storageBucket: "brand-shop-client.appspot.com",
  messagingSenderId: "568006110048",
  appId: "1:568006110048:web:6b261f42b2c05788594c05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;