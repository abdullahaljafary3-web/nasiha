import { db } from "./firebase.js";
import { calculateReadingTime } from "./utils/readingTime.js";
import { getRelatedArticles } from "./services/articles.js";

import {
    doc,
    getDoc,
    updateDoc,
    increment
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const articleId = params.get("id");

const container = document.getElementById("articleContainer");
function formatDate(date){

    if(!date) return "";

    if(date.toDate){

        return date.toDate().toLocaleDateString("ar-EG");

    }

    return date;

}
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
    const readingTime = calculateReadingTime(article.content);
    // زيادة عدد المشاهدات
// زيادة عدد المشاهدات في قاعدة البيانات
try{

    await updateDoc(ref, {

        views: increment(1)

    });

}catch(error){

    console.error("خطأ في تحديث المشاهدات", error);

}

// تحديث القيمة المعروضة مباشرة
article.views = (article.views || 0) + 1;
    document.title = article.title;

    container.innerHTML = `

        <img src="${article.image}" class="article-cover">

        <h1>${article.title}</h1>

       <div class="article-meta">

    <span>📂 ${article.category}</span>

    <span>📅 ${formatDate(article.date)}</span>

    <span>👁️ ${article.views} مشاهدة</span>

    <span>⏱️ ${readingTime} دقيقة قراءة</span>

</div>
<div class="article-tags">

    ${
        article.tags
        ? article.tags.map(tag =>
            `<span class="tag">${tag}</span>`
        ).join("")
        : ""
    }

</div>
        <div class="article-content">

            ${article.content}

        </div>

    `;

    const related = await getRelatedArticles(article.category, articleId);

if (related.length > 0) {

    let html = `
        <section class="related-articles">

            <h2>📚 مقالات ذات صلة</h2>

            <div class="related-grid">
    `;

    related.forEach(item => {

        html += `
            <a class="related-card" href="article.html?id=${item.id}">

                <img src="${item.image}" alt="${item.title}">

                <h3>${item.title}</h3>

            </a>
        `;

    });

    html += `
            </div>

        </section>
    `;

    container.innerHTML += html;

}
}

loadArticle();
