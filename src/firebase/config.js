import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCKSjTh5r4Xks_j2f0n6V71pK_yehgmaVA",
    authDomain: "vue-blog-system-942cd.firebaseapp.com",
    projectId: "vue-blog-system-942cd",
    storageBucket: "vue-blog-system-942cd.appspot.com",
    messagingSenderId: "836971575511",
    appId: "1:836971575511:web:dff9d1622f6c41b61b1892"
  };
  firebase.initializeApp(firebaseConfig)
  let db =firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;
  let auth =firebase.auth();
  export {db,timestamp,auth}