import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { formDataCollectionRef, database } from "../firebase/firebase-config";

export const fetchFormData = createAsyncThunk(
   "form/fetchFormData",
   async() => {
      try{
         const formDoc = []
         const querySnapShot = await getDocs(formDataCollectionRef)
         querySnapShot.forEach(doc => {
            return formDoc.push({id:doc.id,...doc.data()})
         })
         return formDoc
      }

      catch(err){
         return err.code
      }
   }
)

const initialState = {
   loading:false,
   error: "",
   formData:[],
   formStep:[
      {
         step:1,
         isActive:true,
         isCompleted:false,
      },
      {
         step:2,
         isActive:false,
         isCompleted:false,
      },
      {
         step:3,
         isActive:false,
         isCompleted:false,
      },
      {
         step:4,
         isActive:false,
         isCompleted:false,
      }
   ]
}

const formSlice = createSlice({
   name:"form",
   initialState,
   reducers:{
      nextStep: state => {
         const activeStepIndex = state.formStep.findIndex(step => step.isActive)
         state.formStep[activeStepIndex].isActive = false;
         const newIndex = activeStepIndex + 1;
         state.formStep[newIndex] = {...state.formStep[newIndex],isActive:true}
      },

      prevStep: state => {
         const activeStepIndex = state.formStep.findIndex(step => step.isActive)
         state.formStep[activeStepIndex].isActive = false;
         const newIndex = activeStepIndex - 1;
         state.formStep[newIndex] = {...state.formStep[newIndex],isActive:true}
      },

      planChange: state =>  {
         const newFormStepState = state.formStep.map(step => {
            return step.step !== 2 ? {...step,isActive:false} : {...step,isActive:true} 
         })

         state.formStep = newFormStepState
      }
   },

   extraReducers: (builder) => {
      builder
        .addCase(fetchFormData.pending,state => {
           state.loading = true;
         })

         .addCase(fetchFormData.fulfilled,(state,{ payload }) =>  {
            state.loading = false;
            state.formData = payload;
         })

      .addCase(fetchFormData.rejected, (state, {payload}) => {
         state.loading = false;
         state.error = payload
      })
   }
})


export const { nextStep , prevStep, planChange} = formSlice.actions;
export default formSlice.reducer;
