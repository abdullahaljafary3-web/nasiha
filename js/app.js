import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

async function loadArticles(){

    const articlesContainer = document.getElementById("articles");

    articlesContainer.innerHTML = "<div class='spinner'></div>";

    try{

        const snapshot = await getDocs(collection(db,"articles"));

        articlesContainer.innerHTML="";

        snapshot.forEach(doc=>{

            const article = doc.data();

            const card = document.createElement("div");

            card.className="article-card";

            card.innerHTML=`

                <div class="article-image">

                    <img src="${article.image}" alt="${article.title}">

                </div>

                <div class="article-content">

                    <h3>${article.title}</h3>

                    <p>${article.summary}</p>

                    <div class="article-footer">

                        <span>${article.category}</span>

                        <span>${article.date}</span>

                    </div>

                </div>

            `;

            articlesContainer.appendChild(card);

        });

    }

    catch(error){

        articlesContainer.innerHTML="<p>حدث خطأ أثناء تحميل المقالات.</p>";

        console.error(error);

    }

}

loadArticles();
