import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";

const SignUp = () => {
    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopUp();
        console.log(response);
    };
    return (
        <div>
           <h2>Sign Up</h2>
           <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default SignUp;