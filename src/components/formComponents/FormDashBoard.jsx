import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormData } from "../../features/formSlice";
import { auth } from "../../firebase/firebase-config";
import Aside from "../Aside";
import PersonalInfo from "./PersonalInfo";
import { StyledFormDashBoard } from "../styled/FormDashBoardStyled";
import SelectPlan from "./SelectPlan";
import Summary from "./Summary";
import { nanoid } from "@reduxjs/toolkit";
import NextStepBtnArea from "../helperUtils/NextStepBtnArea";
import AddOns from "./AddOns";
import { setInputedDetails } from "../../features/userInputedDetails";

export default function FormDashBoard(){
  const { beenAuthenticated } = useSelector(store => store.userAuth)
  const dispatch =  useDispatch()
  const { formStep } = useSelector(store => store.form)
  const [goBackIsActive,setGoBackIsActive] = useState(false)
  const formData = useSelector(store => store.form.formData)
  const plansData = formData.length && formData[1].plans[0]
  const [billingTimePlanData, setBillingTimePlanData] = useState([])
  const { selectedBillingTime } = useSelector(store => store.InputedDetails.selectedPlans)
  const [userInfo,setUserInfo] = useState({name:"",email:"",phoneNumber:""})
  const [planSelected,setPlanSelected] = useState({name:null,price:null})


  useEffect(()  => {
    if(formData.length && selectedBillingTime === "monthly"){
      setBillingTimePlanData(plansData.monthly)
    }else if(formData.length && selectedBillingTime === "yearly"){
      setBillingTimePlanData(plansData.yearly)
    }
 },[formData,selectedBillingTime])

  useEffect(() => {
    formStep.map(step => {
      return step.step > 1 && step.isActive ? setGoBackIsActive(true) : ""
    })
    
    dispatch(setInputedDetails({type:"sumTotal"}))
  },[formStep])

  useEffect(() => {
    if(auth.currentUser){
      dispatch(fetchFormData())
    }
  },[auth.currentUser])

  useEffect(() => {
    if(planSelected){
      dispatch(setInputedDetails({type:"selectedBillingPlan",planDetails:planSelected}))
    }
  },[planSelected])


  useEffect(()  => {
    if(userInfo.name !== null ){
      dispatch(setInputedDetails({type:"personalInfo",userInfo}))
    }
  },[userInfo])


  return(
    beenAuthenticated &&
    <StyledFormDashBoard>
      <h1 className="AT-only">Frontend Mentor Multi Step Form</h1>
      <Aside />
      {
        formStep.map(step => {
          switch(step.step){
            case 1:
              return  step.isActive && 
              <PersonalInfo 
               key={nanoid()} 
               goBackIsActive={goBackIsActive}
               setUserInfo={value => setUserInfo(value)}
              />
            break;
            case 2:
              return  step.isActive && 
              <SelectPlan key={nanoid()} 
                goBackIsActive={goBackIsActive}
                billingTimePlanData={billingTimePlanData}
                selectedBillingTime={selectedBillingTime}
                setPlanSelected={value => setPlanSelected(value)}
                planSelected={planSelected}
              />
            break;
            case 3:
              return  step.isActive && <AddOns key={nanoid()} goBackIsActive={goBackIsActive}/>
            break;
            case 4:
              return  step.isActive && <Summary key={nanoid()} goBackIsActive={goBackIsActive} />
            break;
          }
        })
      }
    </StyledFormDashBoard>
  )
}
