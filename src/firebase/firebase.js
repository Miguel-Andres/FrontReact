
import * as firebase  from "firebase/app"
import"firebase/firestore" 



var firebaseConfig = {
    apiKey: "AIzaSyCfi-t_35DU091ihp29KKTUtO4AcXDiivM",
    authDomain: "practica-930a0.firebaseapp.com",
    databaseURL: "https://practica-930a0.firebaseio.com",
    projectId: "practica-930a0",
    storageBucket: "practica-930a0.appspot.com",
    messagingSenderId: "279018525564",
    appId: "1:279018525564:web:1dfb19fa31fe8dcc438af9"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export function getFirebase(){
      return app
  }
  export function getFirestore(){
    return firebase.firestore(app)
}

//export oters firebase integrations 