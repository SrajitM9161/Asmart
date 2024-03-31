import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-66Q4RPB4dFXDEkzcrI3IExrBixeqCUg",
  authDomain: "agrismart-fefde.firebaseapp.com",
  projectId: "agrismart-fefde",
  storageBucket: "agrismart-fefde.appspot.com",
  messagingSenderId: "826159977506",
  appId: "1:826159977506:web:df7e975ff24de5a0fbe67b",
  measurementId: "G-K4P8TSZPW4"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);

