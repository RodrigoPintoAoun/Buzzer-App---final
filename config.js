import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDNdbEuNx-dB6L4O5PRFCzmvJnomgM1rzg",
  authDomain: "wireless-buzzer-app-e4773.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-e4773-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-app-e4773",
  storageBucket: "wireless-buzzer-app-e4773.appspot.com",
  messagingSenderId: "61971471347",
  appId: "1:61971471347:web:8f237f313adcd22f765086",
  measurementId: "G-TJ0SXRVF67"
};


// Inicialize o Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()