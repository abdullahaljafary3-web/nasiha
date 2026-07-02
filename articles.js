let articles = JSON.parse(localStorage.getItem("articles")) || [
    {
        id: 1,
        title: "كيف تتعلم بسرعة؟",
        description: "طرق علمية لتحسين التعلم",
        category: "محاضرات",
        content: "<h2>كيف تتعلم بسرعة؟</h2><p>التعلم يعتمد على الفهم.</p>"
    }
];

function saveArticles() {
    localStorage.setItem("articles", JSON.stringify(articles));
}
