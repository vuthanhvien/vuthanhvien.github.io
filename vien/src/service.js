import firebase from 'firebase/app'
import 'firebase/firestore';

if (!firebase.apps.length) {
firebase.initializeApp({
    projectId: 'vienvu-7e64f',
    databaseURL: 'fds afd asfd '
})
}


const db = firebase.firestore();

export const getPosts = () => {
    const posts = db.collection("post").orderBy("createdAt", "desc").get();

    return posts;
}

export const getPost = (id) => {
    const post = db.collection("post").doc(id).get();

    return post;
}
