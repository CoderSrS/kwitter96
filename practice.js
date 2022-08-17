
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyC-zimCHx40OqbBgW9-aH8V_kzqPrDXlfY",
    authDomain: "kwitter-1f66b.firebaseapp.com",
    databaseURL: "https://kwitter-1f66b-default-rtdb.firebaseio.com",
    projectId: "kwitter-1f66b",
    storageBucket: "kwitter-1f66b.appspot.com",
    messagingSenderId: "1081137000365",
    appId: "1:1081137000365:web:13bbbdef4b4fb3cc67fb24"
  };

 // firebase.initialzeApp(firebaseConfig)
 firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name=document.getElementById("username").value 
    firebase.database().ref("/").style(user_name).update({purpose:"adding user"})

}