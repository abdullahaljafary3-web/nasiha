// تسجيل دخول
function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("adminPanel").style.display = "block";
        })
        .catch(err => {
            alert("خطأ في تسجيل الدخول: " + err.message);
        });
}

// تسجيل خروج
function logout() {
    auth.signOut().then(() => {
        location.reload();
    });
}

// التحقق عند فتح الصفحة
auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
    }
});

// إضافة مقال

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
