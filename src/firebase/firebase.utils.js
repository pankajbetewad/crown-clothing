import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDKqtmLVnySGi6Pd66hZ5Doa4US9Rti2Fo',
  authDomain: 'crwn-db-ce0f4.firebaseapp.com',
  projectId: 'crwn-db-ce0f4',
  storageBucket: 'crwn-db-ce0f4.appspot.com',
  messagingSenderId: '955601949479',
  appId: '1:955601949479:web:c51cb36d1311ebc8254f02',
  measurementId: 'G-K7VEYN1P57',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
