// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
  apiKey: "AIzaSyD-wO1VI_mC-WPniWsU_9qHsNpjkS9RJ20",
  authDomain: "independent-service-prov-7cec6.firebaseapp.com",
  projectId: "independent-service-prov-7cec6",
  storageBucket: "independent-service-prov-7cec6.appspot.com",
  messagingSenderId: "142364330563",
  appId: "1:142364330563:web:c1e2619aaca283ef31e2f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
