/* ===========================================
   عناصر واجهة المستخدم
=========================================== */

// تغيير عنوان الصفحة تلقائيًا
document.title = SITE.name;

// تغيير اسم الموقع في الشعار
window.addEventListener("DOMContentLoaded", () => {

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.textContent = "📚 " + SITE.name;

    }

});
