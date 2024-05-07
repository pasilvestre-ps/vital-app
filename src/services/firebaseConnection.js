import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCJllRaHs1UZeNPW4SjmPiyHQ4cxX44Fkc",
    authDomain: "appvital-cab5f.firebaseapp.com",
    projectId: "appvital-cab5f",
    storageBucket: "appvital-cab5f.appspot.com",
    messagingSenderId: "130366708164",
    appId: "1:130366708164:web:7669bfb817fe54f256ec91"
  };
  
  if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase;