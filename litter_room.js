
var firebaseConfig = {
      apiKey: "AIzaSyBeqKbuYavA4ejl--3QCjAU-EW4UIiKb8U",
      authDomain: "trashy-d5806.firebaseapp.com",
      databaseURL: "https://trashy-d5806-default-rtdb.firebaseio.com",
      projectId: "trashy-d5806",
      storageBucket: "trashy-d5806.appspot.com",
      messagingSenderId: "523392228228",
      appId: "1:523392228228:web:2bd00b060443d8ef6fdbd1"
    };

    function addroom(){
      roomname = document.getElementById("room_name").value;
        firebase.database().ref("/").child(roomname).update({
            purpose: "adding room name"
        });
      localStorage.setItem("roomname",roomname);
      window.location = "kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });});}
    getData();
    
    function redirect(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location = "kwitter_page.html";
    }
