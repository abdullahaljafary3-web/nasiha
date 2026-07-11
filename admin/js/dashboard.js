import { db } from "./firebase.js";

import {

collection,

getDocs

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

async function loadDashboard(){

    const snapshot = await getDocs(collection(db,"articles"));

    const articles = snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data()

    }));

    // عدد المقالات
    document.getElementById("articlesCount").textContent = articles.length;

    // مجموع المشاهدات
    const totalViews = articles.reduce((sum,a)=>sum+(a.views||0),0);

    document.getElementById("viewsCount").textContent =
        totalViews.toLocaleString("ar");

    // المقالات المميزة
    const featured = articles.filter(a=>a.featured);

    document.getElementById("featuredCount").textContent =
        featured.length;

    // جدول المقالات
    const table = document.getElementById("articlesTable");

    table.innerHTML="";

    articles.forEach(article=>{

        table.innerHTML += `

        <tr>

            <td>${article.title}</td>

            <td>${article.category}</td>

            <td>${article.views || 0}</td>

        </tr>

        `;

    });

}

loadDashboard();
