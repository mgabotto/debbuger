
import {level } from '/app.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDXkO_G0-f_ecjYzM5DyCcNATFNqjj8Xt8",
    authDomain: "list-test-8b1e0.firebaseapp.com",
    databaseURL: "https://list-test-8b1e0.firebaseio.com",
    projectId: "list-test-8b1e0",
    storageBucket: "list-test-8b1e0.appspot.com",
    messagingSenderId: "15585015929",
    appId: "1:15585015929:web:0a3e7156718a951c92fca8",
    measurementId: "G-8R17SM0WRE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();
// console.log(database1);
var refe = database.ref('hola').set({
    firstName: 'hola',
    secondName: 'sdfsd'
})


