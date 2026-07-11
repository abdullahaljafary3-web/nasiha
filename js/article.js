import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const articleId = params.get("id");

const container = document.getElementById("articleContainer");

async function loadArticle(){

    if(!articleId){

        container.innerHTML="<h2>المقال غير موجود</h2>";

        return;

    }

    const ref = doc(db,"articles",articleId);

    const snap = await getDoc(ref);

    if(!snap.exists()){

        container.innerHTML="<h2>المقال غير موجود</h2>";

        return;

    }

    const article = snap.data();
    // زيادة عدد المشاهدات
await updateDoc(ref, {
    views: increment(1)
});

// تحديث القيمة محلياً
article.views = (article.views || 0) + 1;

    document.title = article.title;

    container.innerHTML = `

        <img src="${article.image}" class="article-cover">

        <h1>${article.title}</h1>

        <div class="article-meta">

            ${article.category}

            |

            ${article.date}

        </div>

        <div class="article-content">

            ${article.content}

        </div>

    `;

}

loadArticle();
