/* ==========================================
   Firebase Configuration
   منصة النصيحة العلمية
========================================== */

// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// بيانات مشروعك

  const firebaseConfig = {
    apiKey: "AIzaSyC-myHs4l_gK9kMLbuImVQrd7JAJIlTeiY",
    authDomain: "nasiha-ff5c0.firebaseapp.com",
    projectId: "nasiha-ff5c0",
    storageBucket: "nasiha-ff5c0.firebasestorage.app",
    messagingSenderId: "124502398827",
    appId: "1:124502398827:web:8ca102d1f2fa8e8efdde2e"
  };

// تشغيل Firebase
const app = initializeApp(firebaseConfig);

// قاعدة البيانات
export const db = getFirestore(app);
