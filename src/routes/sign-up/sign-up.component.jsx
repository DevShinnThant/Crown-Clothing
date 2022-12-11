import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { signInWithGooglePopUp,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignUp = () => {
    
    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div>
           <SignUpForm/>
           <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default SignUp;