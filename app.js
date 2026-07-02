import { db, collection, getDocs } from "./firebase.js";

const container = document.getElementById("articles");

async function loadArticles() {
    const snapshot = await getDocs(collection(db, "articles"));

    container.innerHTML = "";

    snapshot.forEach(doc => {
        const a = doc.data();

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${a.title}</h3>
            <p>${a.description}</p>
            <span>${a.category}</span>
        `;

        container.appendChild(card);
    });
}

loadArticles();
