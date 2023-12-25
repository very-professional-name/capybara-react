// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA4fzF0_jYT0Aqml3eSLv15hNOMmIq1q6k",

  authDomain: "capybara-6b302.firebaseapp.com",

  projectId: "capybara-6b302",

  storageBucket: "capybara-6b302.appspot.com",

  messagingSenderId: "931215949949",

  appId: "1:931215949949:web:c37d7ce1dcd328031e3114"

};


// Initialize Firebase

const firebaseapp = initializeApp(firebaseConfig);

export default firebaseapp