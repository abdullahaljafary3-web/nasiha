import { db } from "../firebase.js";

import {

collection,

getDocs

} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

export async function getArticles(){

    const snapshot = await getDocs(collection(db,"articles"));

    return snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data()

    }));

}
