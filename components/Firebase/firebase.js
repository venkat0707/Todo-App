import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
require('firebase/firestore');
import firebaseConfig from './firebaseConfig';

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
 
}
  


//var uid = firebase.auth().currentUser.uid;
export const auth = firebase.auth();
export const fir = firebase.firestore();
//export const firestore = firebase.firestore();
export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
  //const user = firebase.auth().currentUser;
  
 

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
  

export const logout = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);
