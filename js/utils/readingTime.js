export function calculateReadingTime(htmlContent) {

    if (!htmlContent) return 1;

    // إزالة وسوم HTML
    const text = htmlContent.replace(/<[^>]*>/g, " ");

    // حساب الكلمات
    const words = text.trim().split(/\s+/).length;

    // متوسط القراءة 200 كلمة في الدقيقة
    const minutes = Math.ceil(words / 200);

    return Math.max(minutes, 1);
}
