
import Firebase from 'firebase'
const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyA_SaxCtCPPEqkpTKdz2yxa1oSySVzLHfw",
    authDomain: "vienvu-7e64f.firebaseapp.com",
    databaseURL: "https://vienvu-7e64f.firebaseio.com",
    projectId: "vienvu-7e64f",
    storageBucket: "vienvu-7e64f.appspot.com",
    messagingSenderId: "236828354",
    appId: "1:236828354:web:060e6e55a47c01ed"
  });
 

const firebase = firebaseApp.firestore();

export const getPosts = async () => {
    const snapshot = await firebase.collection('post').get();
    const list = snapshot.docs.map((doc) => {
        const data =  doc.data();
        data.tags = data.tags ? data.tags.split(',')  : [];
        return data;
    });
    return {
        list: list.filter(item=>item.id)
    };
}
export const getSearchPosts = async (page = 1, keySearch = '') => {
    const snapshot = await firebase.collection('post').get();
    const list = snapshot.docs.map((doc) => {
        const data =  doc.data();
        data.tags = data.tags ? data.tags.split(',')  : [];
        return data;
    });
    return {
        list: list.filter(item=>item.id).filter(item=>item.tags.join('').indexOf(keySearch) > -1 )
    };
}
export const getPost = async (id) => {
    const snapshot = await firebase.collection('post').doc(id).get();
    const data =  snapshot.data();
    return data;
}
