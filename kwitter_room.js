
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCZG5OEwfnBLjya2jC3JI20oGmsjUI9H7E",
      authDomain: "kwitter96-22db3.firebaseapp.com",
      databaseURL: "https://kwitter96-22db3-default-rtdb.firebaseio.com",
      projectId: "kwitter96-22db3",
      storageBucket: "kwitter96-22db3.appspot.com",
      messagingSenderId: "388952050823",
      appId: "1:388952050823:web:15fde8f9232deea17e7c22"
    };
    
    firebase.initializeApp(firebaseConfig);


//YOUR FIRE BASE LINKS
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}