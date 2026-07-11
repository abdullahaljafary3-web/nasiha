
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

 const firebaseConfig = {
  apiKey: "AIzaSyC-myHs4l_gK9kMLbuImVQrd7JAJIlTeiY",
  authDomain: "nasiha-ff5c0.firebaseapp.com",
  projectId: "nasiha-ff5c0",
  storageBucket: "nasiha-ff5c0.firebasestorage.app",
  messagingSenderId: "124502398827",
  appId: "1:124502398827:web:8ca102d1f2fa8e8efdde2e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
