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

async function uploadImage(file) {

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("https://api.imgbb.com/1/upload?key=df65c9ff2c67450e6e0f6452c03af6e8", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    return data.data.url; // رابط الصورة
}

async function addArticle() {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;
    const file = document.getElementById("imageFile").files[0];

    if (!file) {
        alert("اختر صورة");
        return;
    }

    // رفع الصورة أولًا
    const imageUrl = await uploadImage(file);

    // حفظ المقال في Firebase Firestore
    db.collection("articles").add({
        title,
        description,
        category,
        content,
        image: imageUrl,
        date: new Date()
    });

    alert("تم نشر المقال 🚀");
}
