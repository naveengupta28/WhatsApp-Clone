// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/app';
import 'firebase/firestore'
import '@firebase/auth'



  const firebaseConfig = {
    apiKey: "AIzaSyAI-tkEqThBHy5lsnGrbVQECkGYWFfElcI",
    authDomain: "whatsapp-clone-ca37d.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-ca37d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whatsapp-clone-ca37d",
    storageBucket: "whatsapp-clone-ca37d.appspot.com",
    messagingSenderId: "333460993546",
    appId: "1:333460993546:web:03460f00f5f3a41d7bd1f3",
    measurementId: "G-X1GK60ZCTD"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;