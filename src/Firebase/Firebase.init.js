
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA4sTJSZuhGiYG6fLaJhOJPtv2SVRcK0g0",
    authDomain: "shopping-lab-f042b.firebaseapp.com",
    projectId: "shopping-lab-f042b",
    storageBucket: "shopping-lab-f042b.appspot.com",
    messagingSenderId: "316362199519",
    appId: "1:316362199519:web:a58257bd3570076aa9b46a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;