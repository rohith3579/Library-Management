// setting

const firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyDKPQBjeCDeAnIRJ5rx2EcXnCYX9i6xEzg",
authDomain: "auth-form-fae4c.firebaseapp.com",
projectId: "auth-form-fae4c",
storageBucket: "auth-form-fae4c.appspot.com",
messagingSenderId: "746299539163",
appId: "1:746299539163:web:0e3d9508be3ca222a7d6fe",
measurementId: "G-RFDRDBKMWV" });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// sign up function
const signUp=()=>{
    const email = document.getElementById("email").value;
    const password=document.getElementById("password").value;
    console.log(email,password) 
    
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("you are signed up")
    window.location.href = "signIn.html";
    //window.location.href = "https://www.google.com/";
    console.log(result)

    var successMsg = document.getElementById("success-msg");
    successMsg.style.display = "block";

    // Redirect to another page after a delay
    setTimeout(function() {
      window.location.href = "otherPage.html";
    }, 10000);
    
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)  
    // ..
  });
}

// sign in function
const signIn=()=>{

    const email = document.getElementById("email").value;
    const password=document.getElementById("password").value;

    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    //document.write("you are signed in")
    window.location.href = "books.html";
    console.log(result)
    // ...
  })
  .catch((error) => {
    document.getElementById("error-message").textContent = "Wrong credentials. Please try again.";

  // Clear error message after 5 seconds
  setTimeout(() => {
    document.getElementById("error-message").textContent = "";
  }, 5000); // 5000 milliseconds = 5 seconds
      window.history.back();
      
    console.log(error.code);
    console.log(error.message)
  });
}