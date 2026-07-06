const container = document.getElementById("articles");
const searchBox = document.getElementById("searchBox");

let allArticles = [];
let currentCategory = "الكل";

// تحميل المقالات من Firebase
async function loadArticles() {

    const snapshot = await db.collection("articles").get();

    allArticles = [];

    snapshot.forEach(doc => {

        allArticles.push({
            _id: doc.id,      // 🔥 هذا هو المهم
            ...doc.data()
        });
    });

    renderArticles(allArticles);
}
// عرض المقالات
function renderArticles(list) {

    container.innerHTML = "";

    list.forEach((a) => {

       container.innerHTML += `
    <div class="card">
        <img src="${a.image}" style="width:100%; border-radius:10px;">
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <span class="tag">${a.category}</span>

        <br><br>

        <a href="article.html?id=${a._id}" class="read-more">
            اقرأ المزيد →
        </a>
    </div>
`;
    });
}
// فلترة التصنيفات
function filterCategory(cat) {
    currentCategory = cat;

    applyFilters();
}

// البحث + التصنيف معًا
function applyFilters() {

    let filtered = allArticles;

    if (currentCategory !== "الكل") {
        filtered = filtered.filter(a => a.category === currentCategory);
    }

    const search = searchBox.value.toLowerCase();

    filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(search) ||
        a.description.toLowerCase().includes(search)
    );

    renderArticles(filtered);
}

// البحث
searchBox.addEventListener("input", applyFilters);

// تشغيل أولي
loadArticles();
