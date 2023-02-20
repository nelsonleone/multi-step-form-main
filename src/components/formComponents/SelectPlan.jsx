import { nanoid } from "@reduxjs/toolkit";
import {  memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectPlanArea, StyledPlanCard, StyledToggleArea } from "../styled/FormDashBoardStyled";
import { setInputedDetails } from "../../features/userInputedDetails";
import NextStepBtnArea from "../helperUtils/NextStepBtnArea";
import ErrorPara from "../helperUtils/ErrorPara";
import { nextStep, prevStep } from "../../features/formSlice";


function SelectPlan(props){

   const { 
      goBackIsActive,
      billingTimePlanData,
      selectedBillingTime,
      setPlanSelected,
      planSelected
   } = props;

   const [error,setError] = useState({show:false,message:null})
   const toggleLabel = selectedBillingTime === "monthly" ? "yearly" : selectedBillingTime === "yearly" ? "monthly" : ""
   const dispatch = useDispatch()




   function handleChosenPlan(planName,price){
      setPlanSelected(prevState => {
         return {...prevState,name:planName,price}
      })

      setError(prev => {
         return {...prev,show:false}
      })
   }
   
   function handlePrevStepMove(){
      dispatch(prevStep())

      setError(prev => {
      return {message:"",show:false}
      })
   }

   function handleNextStepMove(){
      if(planSelected.name){
         dispatch(nextStep())
      }
      else{
         setError({message:"Select a plan to proceed",show:true})
      }
   }

   function handleBillingTimeToggle(){
      dispatch(setInputedDetails({type:"selectedBillingTime",billingTime:
         selectedBillingTime === "monthly" ? "yearly" : "monthly"
      }))

      setPlanSelected({name:null,price:null})

      dispatch(setInputedDetails({type:"resetSelectedPlansData"}))
   }


   return(
      <>
         <SelectPlanArea>
            <h2>Select your plan</h2>
            <p>You have the option on monthly or yearly billing</p>

            <div>
               {
                  billingTimePlanData.map(data => {
                     return(
                        <StyledPlanCard 
                          key={nanoid()} 
                          selected={data.planName === planSelected?.name ? true : false}
                          onClick={() => handleChosenPlan(data.planName,data.price)}
                          >
                           <img src={`/images/${data.iconImage}`} alt="" aria-hidden="true" />
                           <div>
                              <h3>{data.planName}</h3>
                              <p>{data.price}</p>
                              <p>{data.discount}</p>
                           </div>
                        </StyledPlanCard>
                     )
                  })
               }
            </div>
            <StyledToggleArea selected={selectedBillingTime}>
               <p>Monthly</p>
               <div>
                  <button
                   aria-label={`Toggle To ${toggleLabel}`}
                   onClick={handleBillingTimeToggle}
                  >
                     <span>Toggle</span>
                  </button>
               </div>
               <p>Yearly</p>
            </StyledToggleArea>

            {
               error.show &&
               <ErrorPara message={error.message} />
            }
            
         </SelectPlanArea>
         <NextStepBtnArea
           goBackIsActive={goBackIsActive}
           moveToNextStep={handleNextStepMove}
           moveToPrevStep={handlePrevStepMove}
         />
      </>
   )
}

export default memo(SelectPlan)