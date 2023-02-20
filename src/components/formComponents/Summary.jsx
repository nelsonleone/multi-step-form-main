import { nanoid } from "@reduxjs/toolkit"
import { addDoc } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { planChange, prevStep } from "../../features/formSlice"
import { setHasCompletedForm } from "../../features/userInputedDetails"
import { usersSubmittedFormCollectionRef } from "../../firebase/firebase-config"
import ConfirmBtnArea from "../helperUtils/ConfirmBtnArea"
import { StyledSummary, StyledSummaryDetailsContainer, StyledSummaryPlanArea, StyledSummaryTotalArea } from "../styled/FormDashBoardStyled"
import ThankYou from "./ThankYou"


export default function Summary(){
   const { 
      selectedPlans , 
      pickedAddOns, 
      total, 
      profileInfo, 
      hasCompletedForm
   } = useSelector(store => store.InputedDetails)
   const dispatch = useDispatch()
   const prefix = useSelector(store => store.InputedDetails.selectedPlans.selectedBillingTime)

   function handlePrevStepMove(){
      dispatch(prevStep())
   }

   function handleConfirmSummary(){
      dispatch(setHasCompletedForm())

      sendToCloud()
   }

   async function sendToCloud(){
      try{
         await addDoc(usersSubmittedFormCollectionRef,{
            profileInfo,
            selectedPlans,
            pickedAddOns,
            hasCompletedForm
         })

         alert("Form Submitted")
      }

      catch(err){
         return;
      }
   }

   function handlePlanChange(){
      dispatch(planChange())
   }
    
   return(
      <>
         {
           !hasCompletedForm ?
           <div>
               <StyledSummary>
                  <h2>Finishing Up</h2>
                  <p>Double-check everything looks OK before confirming</p>
      
                  <StyledSummaryDetailsContainer>
                     <StyledSummaryPlanArea>
                        <div>
                           <h3>{selectedPlans.plan}({prefix === "monthly" ? "Monthly" : "Yearly"})</h3>
                        <button onClick={handlePlanChange}>Change</button>
                        </div>
                        <span>{selectedPlans.price}</span>
                     </StyledSummaryPlanArea>
      
                     {
                        pickedAddOns.map(addOn => {
                           return(
                              <div key={nanoid()}>
                                 <h3>{addOn.name}</h3>
                                 <span>{addOn.price}</span>
                              </div>
                           )
                        })
                     }
                  </StyledSummaryDetailsContainer>
      
                  <StyledSummaryTotalArea>
                     <p>Total ({prefix === "monthly" ? "Per month" : "Per year"})</p>
                     <span>+${total}/{prefix === "monthly" ? "mo" : "yr"}</span>
                  </StyledSummaryTotalArea>
               </StyledSummary>
               
               <ConfirmBtnArea 
                  moveToPrevStep={handlePrevStepMove}
                  confirm={handleConfirmSummary}
               />
           </div>

            :
            
            <ThankYou />
         }

      </>
   )
}