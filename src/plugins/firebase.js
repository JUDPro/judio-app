import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4DU70XauUU1vjjiuDWPmwv5nk3bqgKDo",
    authDomain: "judio-10aa1.firebaseapp.com",
    databaseURL: 'https://judio-10aa1-default-rtdb.firebaseio.com',
    storageBucket: 'judio-10aa1.appspot.com',
    projectId: "judio-10aa1",
    messagingSenderId: "253779954642",
    appId: "1:253779954642:web:8fd270f871bd7a9998d60b"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();

export { firebase };