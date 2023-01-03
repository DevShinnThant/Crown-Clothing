import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action.js";

import {signInWithGooglePopUp,signInAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js'

import Button,{BUTTON_TYPES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, AuthContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email:'',
    password:'',
};

const SignInForm = () => {
    const dispatch = useDispatch();

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    

    const resetFormField = () => {
      setFormFields(defaultFormFields);
    };

    const signInWithGoogleHandler = async () => {
      dispatch(googleSignInStart());
    }

    const onSubmitHandler = async (e) => {
     e.preventDefault();

     try{
      dispatch(emailSignInStart(email,password));
      resetFormField();
     }catch(err){
       switch (err.code) {
         case 'auth/user-not-found' : alert('user has not found');
         break;
         case 'auth/wrong-password' : alert('incorrect password');
         break;
         default : console.log(err.message);
       }
    }
    };

    const onChangeHandler = (e) => {
      const {name,value} = e.target;
      setFormFields({...formFields,[name]:value})
    };
    
    return (
        <AuthContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={onSubmitHandler}>
          
          <FormInput label='Email' type='email' name='email' value={email} onChange={onChangeHandler}/>

          <FormInput label='Password' type='password' name='password' value={password} onChange={onChangeHandler}/>

          <ButtonsContainer>
            <Button type='submit'>Sign In</Button>
            <Button type='button' buttonType={BUTTON_TYPES.google} onClick={signInWithGoogleHandler}>
               Google sign in
            </Button>
          </ButtonsContainer>

        </form>
        </AuthContainer>
    )
}
export default SignInForm;