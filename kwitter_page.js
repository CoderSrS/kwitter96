//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCZG5OEwfnBLjya2jC3JI20oGmsjUI9H7E",
      authDomain: "kwitter96-22db3.firebaseapp.com",
      databaseURL: "https://kwitter96-22db3-default-rtdb.firebaseio.com",
      projectId: "kwitter96-22db3",
      storageBucket: "kwitter96-22db3.appspot.com",
      messagingSenderId: "388952050823",
      appId: "1:388952050823:web:15fde8f9232deea17e7c22"
    };

    firebase.initializeApp(firebaseConfig)

    userName=localStorage.getItem("usernameStorage")  
    room_name=localStorage.getItem("room_name")

function getData() {
       firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("usernameStorage")
      window.location("index.html")
}


