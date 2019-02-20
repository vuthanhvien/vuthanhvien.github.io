import firebase from 'firebase/app'
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        projectId: 'vienvu-7e64f',
        databaseURL: ''
    })
}


const db = firebase.firestore();

export const getPosts = (page = 1) => {
    const posts = db.collection("post").orderBy("createdAt", "desc").limit(20).startAfter(20 * (page - 1)).get();
    return posts;
}

export const getPost = (id) => {
    const post = db.collection("post").doc(id).get();
    return post;
}
