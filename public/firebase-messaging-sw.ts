// Initialize Firebase
// import firebase from "firebase"

// firebase.initializeApp({
//   apiKey: 'YOUR-API-KEY',
//   projectId: 'YOUR-PROJECT-ID',
//   messagingSenderId: 'YOUR-SENDER-ID',
//   appId: 'YOUR-APP-ID',
// })

// firebase.messaging()

// Import the functions you need from the SDKs you need
import firebase from "firebase"// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtwTIagjeNTS39ASdniI-q3E1ycDI2PHo",
  authDomain: "quick-messanger-app.firebaseapp.com",
  projectId: "quick-messanger-app",
  storageBucket: "quick-messanger-app.appspot.com",
  messagingSenderId: "903408957824",
  appId: "1:903408957824:web:782af62c6eb7fc44a36965",
  measurementId: "G-6NM1BPH2R0"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig)
export const messaging = firebase.messaging()
