import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDUSD4pk0H8PXuT7RC9QUkZBJRbd_QBUsU",
    authDomain: "tjestudo-cee71.firebaseapp.com",
    projectId: "tjestudo-cee71",
    storageBucket: "tjestudo-cee71.appspot.com",
    messagingSenderId: "659969355749",
    appId: "1:659969355749:web:35f0993bca6d020fa1c90c",
    measurementId: "G-B9DBKZFW98",      
    recaptchaSiteKey:'6LcbF_8mAAAAAKckBFOMA9sRckKGK8oEbRAoGOYW'
    
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore(); // Importe o módulo Firestore

export { firestore, firebaseConfig };
export default firebase;