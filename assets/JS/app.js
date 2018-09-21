// Initialize Firebase
var config = {
apiKey: "AIzaSyBl4KmZr04xicxnwte85WRJYMFpsCmWe1I",
authDomain: "train-scheduler-uci.firebaseapp.com",
databaseURL: "https://train-scheduler-uci.firebaseio.com",
projectId: "train-scheduler-uci",
storageBucket: "",
messagingSenderId: "1054825323474"
};
firebase.initializeApp(config);

var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
