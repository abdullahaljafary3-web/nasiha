
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {

getAuth,

signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// استخدم نفس بيانات firebaseConfig الموجودة في js/firebase.js
const firebaseConfig = {

apiKey:"",

authDomain:"",

projectId:"",

storageBucket:"",

messagingSenderId:"",

appId:""

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
