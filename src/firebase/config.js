import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQ5oCL5gZ02GpipRxVoLU_JppRTo8laoQ",
  authDomain: "cooking-site-d2fc6.firebaseapp.com",
  projectId: "cooking-site-d2fc6",
  storageBucket: "cooking-site-d2fc6.appspot.com",
  messagingSenderId: "868456298985",
  appId: "1:868456298985:web:8bf17ed431d22650b03378"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }