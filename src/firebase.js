import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWIfjMw7lhJGAXf2nF2rM7u9OS1AUpZ40",
    authDomain: "proy-2-b6612.firebaseapp.com",
    databaseURL: "https://proy-2-b6612.firebaseio.com",
    projectId: "proy-2-b6612",
    storageBucket: "",
    messagingSenderId: "309470074603",
    appId: "1:309470074603:web:3f22d418a33cf542"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()