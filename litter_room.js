
var firebaseConfig = {
      apiKey: "AIzaSyBeqKbuYavA4ejl--3QCjAU-EW4UIiKb8U",
      authDomain: "trashy-d5806.firebaseapp.com",
      databaseURL: "https://trashy-d5806-default-rtdb.firebaseio.com",
      projectId: "trashy-d5806",
      storageBucket: "trashy-d5806.appspot.com",
      messagingSenderId: "523392228228",
      appId: "1:523392228228:web:2bd00b060443d8ef6fdbd1"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
