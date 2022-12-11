import { auth,signInWithGooglePopUp,signInWithGoogleRedirect,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignUp = () => {
    
    useEffect(()=>{
      const getResult = async () => {
        const response = await getRedirectResult(auth);
        console.log(response.user);
       };
       getResult();
    },[])


    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);
    };
    const signInWithRedirect = async () => {
       const {user} = await signInWithGoogleRedirect();
       console.log(user);
    }
    return (
        <div>
           <h2>Sign Up</h2>
           <button onClick={signInWithGoogle}>Sign In With Google Pop Up</button>
           <button onClick={signInWithRedirect}>Sign In With Google Redirect</button>
        </div>
    )
}

export default SignUp;