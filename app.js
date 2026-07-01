const container = document.getElementById("articles");
const searchBox = document.getElementById("searchBox");

let currentCategory = "الكل";

// عرض المقالات
function displayArticles(list) {
    container.innerHTML = "";

    list.forEach(article => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <span class="tag">${article.category}</span>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="article.html?id=${article.id}">اقرأ المقال</a>
        `;

        container.appendChild(card);
    });
}

// فلترة حسب التصنيف + البحث
function updateView() {
    const searchValue = searchBox.value.toLowerCase();

    let filtered = articles;

    // فلترة التصنيف
    if (currentCategory !== "الكل") {
        filtered = filtered.filter(a => a.category === currentCategory);
    }

    // فلترة البحث
    filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchValue) ||
        article.description.toLowerCase().includes(searchValue)
    );

    displayArticles(filtered);
}

// البحث
searchBox.addEventListener("input", updateView);

// التصنيفات
function filterCategory(category) {
    currentCategory = category;
    updateView();
}

// أول تحميل
displayArticles(articles);
import { db, collection, getDocs } from "./firebase.js";
