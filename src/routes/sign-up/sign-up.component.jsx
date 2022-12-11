import { signInWithGooglePopUp,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignUp = () => {
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);
    };
    return (
        <div>
           <h2>Sign Up</h2>
           <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default SignUp;