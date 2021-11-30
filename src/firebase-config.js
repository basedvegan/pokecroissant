import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChvGBihZ_jNk7bNuuTBIah3wVrLvX2V7M",
  authDomain: "pokemon--signin.firebaseapp.com",
  projectId: "pokemon--signin",
  storageBucket: "pokemon--signin.appspot.com",
  messagingSenderId: "204024948521",
  appId: "1:204024948521:web:41b23866214a6ab073b938",
};

const app = initializeApp(firebaseConfig);



export const authentication = getAuth(app);