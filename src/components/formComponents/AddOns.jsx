import { nanoid } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StyledAddOnArea } from "../styled/FormDashBoardStyled"
import { setInputedDetails } from "../../features/userInputedDetails"
import AddOnCard from "../helperUtils/AddOnCard"
import { nextStep, prevStep } from "../../features/formSlice"
import NextStepBtnArea from "../helperUtils/NextStepBtnArea"


export default function AddOns(props){

   const { goBackIsActive } = props;
   const {formData} = useSelector(store => store.form)
   const [addOnData,setAddOnData] = useState([])
   const dispatch = useDispatch()
   const { selectedBillingTime } = useSelector(store => store.InputedDetails.selectedPlans)
   const [selectedAddOnsArray,setSelectedAddOnsArray] = useState([])

   const [checkboxData,setCheckboxData] = useState([
      {id:nanoid(),isChecked:false},
      {id:nanoid(),isChecked:false},
      {id:nanoid(),isChecked:false}
   ])

   useEffect(() => {
     if(formData.length && selectedBillingTime === "monthly"){
        setAddOnData(formData[0].addOns.monthly)
     }
     else if(formData.length && selectedBillingTime === "yearly"){
      setAddOnData(formData[0].addOns.yearly)
     }
   },[formData])


   function handleNextStepMove(){
      dispatch(nextStep())
      dispatch(setInputedDetails({type:"selectedAddOn",selectedAddOns:selectedAddOnsArray}))
   }

   function handlePrevStepMove(){
      dispatch(prevStep())
   }


   function handleCheck(id,addOn){
      setCheckboxData(prevState => {
         return prevState.map(state => {
            return state.id === id ? {...state,isChecked:!state.isChecked} : state
         })
      })

      setSelectedAddOnsArray(prevArray => {
         return prevArray.filter(stateAddOn => {
            return stateAddOn.name !== addOn.name 
         })
      })

      setSelectedAddOnsArray(prevArray => {
         return [...prevArray,addOn]
      })
   }

   return(
      <>
         <StyledAddOnArea>
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experince.</p>

            <div>
               {
                  addOnData.length &&
                  addOnData.map((addOn,index) => {
                     return(
                        <AddOnCard  
                          key={nanoid()}
                          id={checkboxData[index]?.id}
                          isChecked={checkboxData[index]?.isChecked}
                          handleCheck={handleCheck}
                          addOn={addOn} 
                          index={index} 
                        />
                     )
                  })
               }
            </div>
         </StyledAddOnArea>
         <NextStepBtnArea
           goBackIsActive={goBackIsActive}
           moveToNextStep={handleNextStepMove}
           moveToPrevStep={handlePrevStepMove}
         />
      </>
   )
}