import { nanoid } from "@reduxjs/toolkit"
import { memo, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StyledAddOnCard } from "../styled/FormDashBoardStyled"
import { CustomCheckBoxClass, SrOnlyLabel } from "../styled/utils/StyledUtils"
import { setInputedDetails } from "../../features/userInputedDetails"



function AddOnCard (props){
   const {addOn , index, handleCheck, isChecked, id} = props;
   const dispatch = useDispatch()
   const pickedAddOns = useSelector(store => store.InputedDetails.pickedAddOns)


   return(
      <StyledAddOnCard key={nanoid()}  checked={isChecked} onClick={() => handleCheck(id,addOn)}>
         <SrOnlyLabel htmlFor={`addOn${index}Input`}>
         Add Online Services
         </SrOnlyLabel>
         <CustomCheckBoxClass checked={isChecked}>
         <input 
           type="checkbox" 
           checked={isChecked}
           onChange={() => handleCheck(id,addOn)} 
           aria-labelledby={`addOn${index}`} 
           id={`addOn${index}Input`}
         />
         </CustomCheckBoxClass>
         <div>
            <h3>{addOn.name}</h3>
            <p id={`addOn${index}`}>{addOn.desc}</p>
         </div>
         <p>{addOn.price}</p>
      </StyledAddOnCard>
   )
}

export default AddOnCard