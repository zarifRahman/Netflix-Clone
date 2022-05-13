import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCs8MHxLKL13pLsTbj2bYl0GBbaZVweB9c",
  authDomain: "netflix-a54c1.firebaseapp.com",
  projectId: "netflix-a54c1",
  storageBucket: "netflix-a54c1.appspot.com",
  messagingSenderId: "682393039184",
  appId: "1:682393039184:web:967f413fca54ca3d437c55",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };