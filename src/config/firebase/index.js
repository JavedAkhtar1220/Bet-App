// import firebase from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBL7kxSElgh8WzWAmPQwqEOb8C6ZcNnKQA",
  authDomain: "bet-app-c69ee.firebaseapp.com",
  projectId: "bet-app-c69ee",
  storageBucket: "bet-app-c69ee.appspot.com",
  messagingSenderId: "39058685781",
  appId: "1:39058685781:web:897d3ce4b091a07aa279dc",
  measurementId: "G-BWEPHY6KK4"
};

export default firebase.initializeApp(firebaseConfig);
export const gProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();