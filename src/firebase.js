// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg3fJgK9RIb10Lx78wGKxq9AvsmkA_ys8",
  authDomain: "mail-box-client-46467.firebaseapp.com",
  projectId: "mail-box-client-46467",
  storageBucket: "mail-box-client-46467.appspot.com",
  messagingSenderId: "867943588871",
  appId: "1:867943588871:web:ec832a46cbd6586a53b6a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth