// firebase.js

import { initializeApp } from "firebase/app";
// import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOFajdf-jpWTZ2VDRfObGjKX8pmSSQ-nA",
  authDomain: "shop-ad60e.firebaseapp.com",
  projectId: "shop-ad60e",
  storageBucket: "shop-ad60e.appspot.com",
  messagingSenderId: "969782076024",
  appId: "1:969782076024:web:012778765b4df575af438d"
};

const app = initializeApp(firebaseConfig);

export default app; // Export the Firebase app instance
