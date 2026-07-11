export function createArticleCard(id, article){

    return `

    <article class="article-card">

        <div class="article-image">

            <img
            src="${article.image || 'images/default-cover.jpg'}"
            alt="${article.title}">

        </div>

        <div class="article-content">

            <h3>${article.title}</h3>

            <p>${article.summary}</p>

            <div class="article-footer">

                <span>${article.category}</span>

                <span>${article.date}</span>

            </div>

            <a
            class="btn mt-2"
            href="article.html?id=${id}">

                اقرأ المقال

            </a>

        </div>

    </article>

    `;

}
