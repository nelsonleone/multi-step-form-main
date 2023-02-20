import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import InputErrorAnalyzer from "../helperUtils/InputErrorAnalyzer";
import NextStepBtnArea from "../helperUtils/NextStepBtnArea";
import { StyledPersonalInfoArea } from "../styled/FormDashBoardStyled"
import { nextStep } from "../../features/formSlice";
import ErrorPara from "../helperUtils/ErrorPara";
import { setInputedDetails } from "../../features/userInputedDetails";
import { auth } from "../../firebase/firebase-config";

export default function PersonalInfo(props){
   
   const { goBackIsActive, setUserInfo } = props;
   const [error,setError] = useState({show:false,message:null})
   const dispatch = useDispatch()
   const nameRef = useRef()
   const emailRef = useRef()
   const phoneNumberRef = useRef()
   const stepDetails = useSelector(store => store.form.formStep[0])
   const EMRcurrent = emailRef.current && emailRef.current.value;
   const NMRcurrent = nameRef.current && nameRef.current.value;
   const PNRcurrent = phoneNumberRef.current && phoneNumberRef.current.value;

   function handleNextStepMove(){
      if(!error.message && NMRcurrent !== null){
         setUserInfo({name:NMRcurrent,email:EMRcurrent,phoneNumber:PNRcurrent})
         
         setTimeout(() => {
            dispatch(nextStep())
         }, 1000);
      }
      else if(error.message){
        setError(prev => {
         return {...prev,show:true}
        })
      }
   }

   useEffect(() => {
      setError(prev => {
         return {...prev,message:InputErrorAnalyzer(nameRef,emailRef,phoneNumberRef)}
      })
   },[EMRcurrent,PNRcurrent,NMRcurrent])



   return(
      <>
         <StyledPersonalInfoArea>
            <h2>Personal info</h2>
            <p>
               Please provide your name, email address, and phone number.
            </p>

            <form id="personalInfoForm">
               <div>
                  <label htmlFor="personalInfoName">Name</label>
                  <input 
                  type="text" 
                  id="personalInfoName" 
                  placeholder="e.g. Stephen King" 
                  ref={nameRef} 
                  onChange={()  => setError(prev => {return {...prev,show:false}})}
                  />
               </div>

               <div>
                  <label htmlFor="personalInfoEmail">Email Address</label>
                  <input 
                  type="email" 
                  id="personalInfoEmail" 
                  placeholder="e.g. stephenking@lorem.com" 
                  ref={emailRef} 
                  onChange={()  => setError(prev => {return {...prev,show:false}})}
                  />
               </div>

               <div>
                  <label htmlFor="personalInfoPhone">Phone Number</label>
                  <input 
                     type="text" 
                     placeholder="e.g. +123456787890" 
                     ref={phoneNumberRef} 
                     onChange={()  => setError(prev => {return {...prev,show:false}})}
                  />
               </div>
            </form>
           {
            error.show &&
            <ErrorPara  message={error.message}/>
           }
         </StyledPersonalInfoArea>
         <NextStepBtnArea 
           goBackIsActive={goBackIsActive}
           moveToNextStep={handleNextStepMove}
         />
      </>
   )
}