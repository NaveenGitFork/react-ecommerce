import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0Kcc49P80aZUlkNz4JjDbupTkoZdxTQI",
  authDomain: "react-ecom-db-e6890.firebaseapp.com",
  databaseURL: "https://react-ecom-db-e6890.firebaseio.com",
  projectId: "react-ecom-db-e6890",
  storageBucket: "react-ecom-db-e6890.appspot.com",
  messagingSenderId: "905143937686",
  appId: "1:905143937686:web:8b6687a8991fb3bbb670b7",
  measurementId: "G-LJCR2J6XBK",
};

//this code is to save data to friestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log("error creating user data", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/// to provide logic to allow user authentication using google sign in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
