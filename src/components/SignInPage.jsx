import { useRef, useState } from "react";
import { FormBgWrapper, StyledForm } from "./styled/Styled-SignIn-SignUp";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { continuedWithEmailAndPassword, continuedWithGoogle, getEmailAuth } from "../features/userAuthSlice";
import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import ErrorPara from "./helperUtils/ErrorPara";
import firebaseAuthErrorFunction from "./helperUtils/firebaseAuthErrorFunction";

export default function SignInPage(){
   const signInEmailRef = useRef()
   const { inLoadingState } = useSelector(store => store.userAuth)
   const signInPasswordRef = useRef()
   const dispatch = useDispatch()
   const [error,setError] = useState("")


   async function handleSignIn(e){
      e.preventDefault()
      const email = signInEmailRef.current.value;
      const password = signInPasswordRef.current.value;
      try{
         await signInWithEmailAndPassword(auth,email,password)
         dispatch(continuedWithEmailAndPassword())
      }
      catch(err){
         console.log(err.code)
        setError(firebaseAuthErrorFunction(err.code))
      }
   }



   return(
      !inLoadingState &&
      <FormBgWrapper>
        <h1>FRONTEND MENTOR MULTI STEP FORM</h1>
        <StyledForm onSubmit={handleSignIn}>
            <h2>Sign In</h2>
            <img src="/images/user.png" alt=""  aria-hidden="true" />
            <div>
               <label htmlFor="SignInEmailInput">Enter Your Email</label>
               <input 
               type="email" 
               id="SignInEmailInput" 
               ref={signInEmailRef} 
               onChange={() => setError("")}
               />

               <label htmlFor="SignInPasswordInput">Enter Password</label>
               <input 
                  type="password" 
                  id="SignInPasswordInput" 
                  ref={signInPasswordRef} 
                  onChange={() => setError("")}
               />
               <ErrorPara message={error}/>
               <button type="submit">Login</button>
            </div>
            
            <div>
               <Link to="/signup">Sign Up</Link>
               <Link onClick={() => dispatch(continuedWithGoogle())}>
                  <span>Continue With Google</span>
                  <img src="/images/Google_Icon.png" alt=""  aria-hidden="true"  />
               </Link>
            </div>
         </StyledForm>
      </FormBgWrapper>
   )
}