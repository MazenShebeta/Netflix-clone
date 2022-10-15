// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArkWsMoXNVKVBA3wZGNrGJHe2dusBPeE8",
  authDomain: "fakeflix-cabde.firebaseapp.com",
  projectId: "fakeflix-cabde",
  storageBucket: "fakeflix-cabde.appspot.com",
  messagingSenderId: "686875633769",
  appId: "1:686875633769:web:9bee1c1ef7a070c964daf8",
  measurementId: "G-CB82C78NQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);