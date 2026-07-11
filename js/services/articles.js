import { db } from "../firebase.js";

import {
    collection,
    getDocs,
    query,
    where,
    limit
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// جميع المقالات
export async function getArticles(){

    const snapshot = await getDocs(collection(db,"articles"));

    return snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data()

    }));

}

// المقالات ذات الصلة
export async function getRelatedArticles(category,currentId){

    const q=query(

        collection(db,"articles"),

        where("category","==",category),

        limit(4)

    );

    const snapshot=await getDocs(q);

    return snapshot.docs

        .map(doc=>({

            id:doc.id,

            ...doc.data()

        }))

        .filter(article=>article.id!==currentId);

}
