import {initializeApp} from 'firebase/app';

import {getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZpyDpg6N4p2YKt-0UMTThT1xXajtJUaw",
    authDomain: "crown-db-b0c56.firebaseapp.com",
    projectId: "crown-db-b0c56",
    storageBucket: "crown-db-b0c56.appspot.com",
    messagingSenderId: "905240338649",
    appId: "1:905240338649:web:0c873121a54bffee941ec8"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:'select_account'
});

export const auth = getAuth();

export const db = getFirestore();

export const signInWithGooglePopUp = async () => await signInWithPopup(auth,provider);

export const createAuthUserWithEmailAndPassword = async (email,password) => {
 return await createUserWithEmailAndPassword(auth,email,password);
};

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  const docRef = doc(db,'users',userAuth.uid);

  const docSnapShot = await getDoc(docRef);


  if(!docSnapShot.exists())
  {
  const {displayName,email} = userAuth;
  const createdAt = new Date();
    try{
      await setDoc(docRef,{
         displayName,
         email,
         createdAt,
         ...additionalInformation
      })
    }catch(err){
      console.log(err.message)
    }
  }
}