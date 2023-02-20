import { StyledAsideSection, StyledTabIndicator } from "./styled/FormDashBoardStyled";
import { useSelector } from "react-redux";
import {useState, useEffect} from "react"
import TabNumberIndicator from "./helperUtils/TabNumberIndicator";
import { nanoid } from "@reduxjs/toolkit";

export default function Aside(){
   const  { formStep } = useSelector(store => store.form)
   const [formSteps,setFormSteps] = useState([])

   useEffect(() =>  {
      setFormSteps(formStep)
   },[formStep])

   return(
      <StyledAsideSection>
         <ul>
            {
               formSteps.map(step => {
                  return(
                     <TabNumberIndicator 
                       isActive={step.isActive}
                       number={step.step} 
                       key={nanoid()} 
                       heading={
                        step.step === 1 ? "Your info" :
                        step.step === 2 ? "Select plan" :
                        step.step === 3 ? "Add-ons" :
                        step.step === 4 ? "Summary" : ""
                       }
                     />
                  )
               })
            }
         </ul>
      </StyledAsideSection>
   )
}