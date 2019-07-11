import * as firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDwdx5GorfnngkDZ_qJYjhAsl935gSWlFY",
    authDomain: "budget-app-ada37.firebaseapp.com",
    databaseURL: "https://budget-app-ada37.firebaseio.com",
    projectId: "budget-app-ada37",
    storageBucket: "budget-app-ada37.appspot.com",
    messagingSenderId: "621799600219",
    appId: "1:621799600219:web:e81a380c634e03ab"
};
firebase.initializeApp(firebaseConfig);
export const db: firebase.firestore.Firestore = firebase.firestore();


