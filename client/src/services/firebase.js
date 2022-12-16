import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCEpAU7S1hWAgmHgsgkbWa_TTtz9NEDG9w",
  authDomain: "pyre-63c41.firebaseapp.com",
  projectId: "pyre-63c41",
  storageBucket: "pyre-63c41.appspot.com",
  messagingSenderId: "1051769376281",
  appId: "1:1051769376281:web:78c39307429ba5ff002488"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
