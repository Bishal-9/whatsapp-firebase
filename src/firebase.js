import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDh48CcMgQ5BMj0YJ6JSOd0G1xc_5tanp8",
    authDomain: "whatsapp-firebase-clone-6b922.firebaseapp.com",
    projectId: "whatsapp-firebase-clone-6b922",
    storageBucket: "whatsapp-firebase-clone-6b922.appspot.com",
    messagingSenderId: "511785444717",
    appId: "1:511785444717:web:bf3bae641e8b8c500b6664",
    measurementId: "G-9VV38T3R8S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db