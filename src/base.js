import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqsQ-P1O6298q0jB9onIR-A0TlfRFxSzU",
    authDomain: "escaperoom-d2556.firebaseapp.com",
    databaseURL: "https://escaperoom-d2556.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;