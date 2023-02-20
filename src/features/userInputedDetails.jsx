import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   profileInfo:{
      name:null,
      email:null,
      phoneNumber:null
   },

   selectedPlans:{
      selectedBillingTime:"monthly",
      plan:null,
      price:null
   },

   pickedAddOns:[],

   total: null,
   hasCompletedForm:false
}

const userInputedDetails = createSlice({
   name:"completedFormDetails",
   initialState,
   reducers:{
      setInputedDetails:(state,{payload}) => {
         if(payload.type === "personalInfo"){
            state.profileInfo = payload.userInfo
         }

         else if(payload.type === "selectedBillingPlan"){
            state.selectedPlans.plan = payload.planDetails.name;
            state.selectedPlans.price = payload.planDetails.price;
         }

         else if(payload.type === "selectedBillingTime"){
            state.selectedPlans.selectedBillingTime = payload.billingTime;
         }

         else if(payload.type === "resetSelectedPlansData"){
            state.selectedPlans = {...state.selectedPlans,plan:null,price:null}
         }

         else if(payload.type === "selectedAddOn"){
            state.pickedAddOns = payload.selectedAddOns;
         }

         else if(payload.type === "sumTotal" && state.selectedPlans.price !== null){
            const planCost = Number( state.selectedPlans.price.match(/\d+/)[0])
            const addOnsCost = state.pickedAddOns.reduce((accumulator, currentValue) => {
               const price = currentValue.price;
               const numberValue = parseInt(price.replace(/[^\d.-]/g, ""));
               return accumulator + numberValue;
             }, 0);

            state.total = planCost + addOnsCost
         }
      },

      setHasCompletedForm:state => {
         state.hasCompletedForm = true;
      }
   }
})

export const {setInputedDetails, setHasCompletedForm } = userInputedDetails.actions;
export default userInputedDetails.reducer;