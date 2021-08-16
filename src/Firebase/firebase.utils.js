import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmimt_ZWXotpsp5VoZWghR9KncAhXrixI",
    authDomain: "nanyam-shopping-app-demo.firebaseapp.com",
    projectId: "nanyam-shopping-app-demo",
    storageBucket: "nanyam-shopping-app-demo.appspot.com",
    messagingSenderId: "37628810686",
    appId: "1:37628810686:web:5871aa3cbe1bfae79a95ef",
    measurementId: "G-XJB7WERKQ2"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user: ', error);
        }
    }

    return userRef;
};

export default firebase;