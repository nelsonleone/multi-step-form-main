import { useRef, useState } from "react";
import { FormBgWrapper, StyledForm } from "./styled/Styled-SignIn-SignUp";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { continuedWithGoogle, getEmailAuth } from "../features/userAuthSlice";
import { auth } from "../firebase/firebase-config";
import ErrorPara from "./helperUtils/ErrorPara";
import { useSelector } from "react-redux";
import firebaseAuthErrorFunction from "./helperUtils/firebaseAuthErrorFunction";


export default function SignUpPage(){
   const dispatch = useDispatch()
   const { inLoadingState } = useSelector(store => store.userAuth)
   const [error,setError]  = useState("")
   const signUpEmailRef = useRef()
   const signUpPasswordRef = useRef()


   async function handleSignUp(e){
      e.preventDefault()
      const email = signUpEmailRef.current.value;
      const password = signUpPasswordRef.current.value;
      try{
         await createUserWithEmailAndPassword(auth,email,password)
         dispatch(continuedWithEmailAndPassword())
      }
      catch(err){
         setError(firebaseAuthErrorFunction(err.code))
      }
   }


   return(
      !inLoadingState &&
      <FormBgWrapper>
         <h1>FRONTEND MENTOR MULTI STEP FORM</h1>
         <StyledForm onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <img src="/images/user.png" alt=""  aria-hidden="true" />
            <div>
               <label htmlFor="SignUpEmailInput">Enter Your Email</label>
               <input 
               type="email" 
               id="SignUpEmailInput" 
               ref={signUpEmailRef} 
               onChange={() => setError("")}
               />

               <label htmlFor="SignInPasswordInput">Enter Password</label>
               <input 
               type="password" 
               id="SignUpPasswordInput" 
               ref={signUpPasswordRef} 
               onChange={() => setError("")}
               />
               <ErrorPara message={error}/>
               <button type="submit">Create Account</button>
            </div>
            
            <div>
               <Link to="/signin">Sign In</Link>
               <Link onClick={()  => dispatch(continuedWithGoogle())}>
                  <span>Continue With Google</span>
                  <img src="/images/Google_Icon.png" alt=""  aria-hidden="true"  />
               </Link>
            </div>
         </StyledForm>
      </FormBgWrapper>
   )
}


{/* <div>
<div>
   <label htmlFor="nameInput">Name</label>
   <input type="text" id="nameInput" placeholder="e.g Stephen King" />
</div>
<div>
   <label htmlFor="emailInput">Email Address</label>
   <input type="text" id="emailInput" placeholder="e.g stephenking@lorem.com" />
</div>
<div>
   <label htmlFor="phoneInput">Phone Number</label>
   <input type="text" id="phoneInput" placeholder="e.g +1234567890" />
</div>
</div> */}