function addArticle() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    if (!title || !description || !content) {
        alert("يرجى ملء كل الحقول");
        return;
    }

    const newArticle = {
        id: Date.now(),
        title,
        description,
        category,
        content
    };

    articles.push(newArticle);
    saveArticles();

    alert("تمت الإضافة بنجاح!");

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("content").value = "";
}