
import { db } from "./firebase.js";

import {

collection,

getDocs

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const table=document.getElementById("articlesTable");

const search=document.getElementById("search");

let articles=[];

async function loadArticles(){

    const snapshot=await getDocs(collection(db,"articles"));

    articles=snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data()

    }));

    renderArticles(articles);

}

function renderArticles(data){

    table.innerHTML="";

    data.forEach(article=>{

        table.innerHTML+=`

        <tr>

        <td>

        <img
        class="thumb"
        src="${article.image}">

        </td>

        <td>${article.title}</td>

        <td>${article.category}</td>

        <td>${article.views || 0}</td>

        <td>

        <button
        class="action-btn edit">

        تعديل

        </button>

        <button
        class="action-btn delete">

        حذف

        </button>

        </td>

        </tr>

        `;

    });

}

search.addEventListener("input",()=>{

    const value=search.value.toLowerCase();

    const filtered=articles.filter(a=>

        a.title.toLowerCase().includes(value)

    );

    renderArticles(filtered);

});

loadArticles();
