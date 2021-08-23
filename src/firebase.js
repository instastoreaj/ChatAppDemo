import * as firebase from "firebase";

// should go in a secret file
const config = {
  apiKey: "AIzaSyCcx6_3VLm5WmvZnAJLs3-Vt0xWWkKvwG4",
  authDomain: "chatapp-d8d09.firebaseapp.com",
  databaseURL: "https://chatapp-d8d09.firebaseio.com",
  projectId: "chatapp-d8d09",
  storageBucket: "",
  messagingSenderId: "667312803177"
};
firebase.initializeApp(config);

export default firebase;
/* apiKey: "AIzaSyDoUV0B2Kxmz3Vh3Wi3E8IEI1Wob1TKeRE",
authDomain: "chatapp-b3096.firebaseapp.com",
databaseURL: "https://chatapp-b3096.firebaseio.com",
projectId: "chatapp-b3096",
storageBucket: "chatapp-b3096.appspot.com",
messagingSenderId: "57638054400" */
