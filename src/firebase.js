import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBrKMCyl9BXuHYFLZBVwW7Zb05GVBKwOQQ",
    authDomain: "netflix-clone-3e529.firebaseapp.com",
    projectId: "netflix-clone-3e529",
    storageBucket: "netflix-clone-3e529.appspot.com",
    messagingSenderId: "610734468134",
    appId: "1:610734468134:web:5b9d3dc78411f624d78ae7"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};

  export default db;

  