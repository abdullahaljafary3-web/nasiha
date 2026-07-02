const container = document.getElementById("articles");

async function loadArticles() {
    const snapshot = await firebase.firestore().collection("articles").get();

    container.innerHTML = "";

    snapshot.forEach(doc => {
        const a = doc.data();

        container.innerHTML += `
            <div class="card">
                <h3>${a.title}</h3>
                <p>${a.description}</p>
                <span>${a.category}</span>
            </div>
        `;
    });
}

loadArticles();
