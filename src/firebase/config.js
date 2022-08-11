import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBtLY0ivmbotyICN__fFsPiF6cV_XIcfhE",
  authDomain: "recipe-directory-618f4.firebaseapp.com",
  projectId: "recipe-directory-618f4",
  storageBucket: "recipe-directory-618f4.appspot.com",
  messagingSenderId: "959582926266",
  appId: "1:959582926266:web:9838924c724c3fb9f71983"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }