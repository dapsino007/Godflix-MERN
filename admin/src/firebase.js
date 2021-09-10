import firebase from 'firebase';


const app = firebase.initializeApp({
  apiKey: process.env.API_Key,
  authDomain: "godflix-mern.firebaseapp.com",
  projectId: "godflix-mern",
  storageBucket: "godflix-mern.appspot.com",
  messagingSenderId: "200700931488",
  appId: "1:200700931488:web:ec3924ed6594ad458288c5"
});


const storage = app.storage();
export default storage;
