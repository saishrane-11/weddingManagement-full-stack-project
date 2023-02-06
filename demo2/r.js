const firebaseConfig = {
    apiKey: "AIzaSyCnOprnINp3MXp6Mpp9o6mRGYGoyfNV3dk",
    authDomain: "form-6de70.firebaseapp.com",
    projectId: "form-6de70",
    storageBucket: "form-6de70.appspot.com",
    messagingSenderId: "434886757332",
    appId: "1:434886757332:web:898b3031c6141dd299a441",
    measurementId: "G-6BTCC3FDBE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password= document.getElementById("password");
    const promise= auth.createUserWithEmailAndPassword(email.ariaValueMax, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed In");
  }