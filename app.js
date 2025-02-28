  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBj4PA_YqCNRfuKBBswry3Jd6l5ZvoDvY4",
    authDomain: "sign-up-login-form-6d6ef.firebaseapp.com",
    projectId: "sign-up-login-form-6d6ef",
    storageBucket: "sign-up-login-form-6d6ef.firebasestorage.app",
    messagingSenderId: "900601216169",
    appId: "1:900601216169:web:3f48385eff000e7a9d3db8",
    measurementId: "G-9KMNNX996T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  document.getElementById("signupBtn")?.addEventListener("click", (e) => {
    e.preventDefault();    

    let email = document.getElementById("email").value;     
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password) 
    .then(() => {             
        alert("Signup Successfully");            
        window.location.href = "welcome.html";
    })
     .catch(error => document.getElementById("message").innerText = error.message); 
    });   
    
  document.getElementById("loginBtn")?.addEventListener("click", () => {
    let email = document.getElementById("email").value;     
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)         
    .then(() => {             
        alert("Login Successfully");             
        window.location.href = "welcome.html";         
    })         
    .catch(error => document.getElementById("message").innerText = error.message); 
 });  

 export function logout() {     
    signOut(auth)         
    .then(() => {             
        alert("Logged out");            
        window.location.href = "index.html";         
    })         
    .catch(error => console.error("Logout Error:", error)); 
 } 

 document.getElementById("logoutBtn")?.addEventListener("click", logout); 
