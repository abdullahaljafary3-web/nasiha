import { getArticles } from "./services/articles.js";

import { createArticleCard } from "./components/articleCard.js";

async function loadHome(){

    const container=document.getElementById("articles");

    container.innerHTML="<div class='spinner'></div>";

    try{

        const articles=await getArticles();

        container.innerHTML="";

        articles.forEach(article=>{

            container.innerHTML+=createArticleCard(article.id,article);

        });

    }

    catch(error){

        console.error(error);

        container.innerHTML="<p>تعذر تحميل المقالات.</p>";

    }

}

loadHome();
