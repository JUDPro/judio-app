import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyD4DU70XauUU1vjjiuDWPmwv5nk3bqgKDo",
    authDomain: "judio-10aa1.firebaseapp.com",
    projectId: "judio-10aa1",
    storageBucket: "judio-10aa1.appspot.com",
    messagingSenderId: "253779954642",
    appId: "1:253779954642:web:8fd270f871bd7a9998d60b"
};

firebase.initializeApp(firebaseConfig);

export { firebase }; 