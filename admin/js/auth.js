
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {

getAuth,

signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// استخدم نفس بيانات firebaseConfig الموجودة في js/firebase.js
 const firebaseConfig = {
  apiKey: "AIzaSyC-myHs4l_gK9kMLbuImVQrd7JAJIlTeiY",
  authDomain: "nasiha-ff5c0.firebaseapp.com",
  projectId: "nasiha-ff5c0",
  storageBucket: "nasiha-ff5c0.firebasestorage.app",
  messagingSenderId: "124502398827",
  appId: "1:124502398827:web:8ca102d1f2fa8e8efdde2e"
};

const app=initializeApp(firebaseConfig);

const auth=getAuth(app);

const form=document.getElementById("loginForm");

const error=document.getElementById("errorMessage");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

window.location.href="index.html";

}

catch{

error.textContent="البريد الإلكتروني أو كلمة المرور غير صحيحة.";

}

});
