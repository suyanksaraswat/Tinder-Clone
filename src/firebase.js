import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAj8Qi4xRY6jb4b0IFUcU1LvNblaVqG5GM",
	authDomain: "tinder-clone-2ecc4.firebaseapp.com",
	databaseURL: "https://tinder-clone-2ecc4.firebaseio.com",
	projectId: "tinder-clone-2ecc4",
	storageBucket: "tinder-clone-2ecc4.appspot.com",
	messagingSenderId: "123457856691",
	appId: "1:123457856691:web:e0b33c3aff924dd705bcc6",
	measurementId: "G-7Z3LXK7QY3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
