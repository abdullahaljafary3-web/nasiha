function addArticle() {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    if (!title || !description || !content) {
        alert("يرجى ملء كل الحقول");
        return;
    }

    db.collection("articles").add({
        title: title,
        description: description,
        category: category,
        content: content,
        date: new Date()
    }).then(() => {
        alert("تم نشر المقال بنجاح 🚀");

        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("content").value = "";
    });

}