import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userDetailsObjCreator from '../components/helperUtils/userDetailsObjCreator';
import {auth} from "../firebase/firebase-config";


const authCurrentUser = auth.currentUser

const initialState = {
   beenAuthenticated:auth.currentUser ? true : false ,
   usedGoogleAuth: false,
   usedEmailAndPasswordAuth: false,
   userDetails:auth.currentUser || null,
   inLoadingState:true,
}

const userAuthSlice = createSlice({
   name:'userAuth',
   initialState,
   reducers:{
      continuedWithGoogle: state => {
         state.usedGoogleAuth = true;
      },

      getGoogleAuthUser:(state, { payload }) => {
         if(payload.status === 'success'){
            state.beenAuthenticated = true;
            state.userDetails = payload.userDetails;
         }
      },

      continuedWithEmailAndPassword: state => {
         state.usedEmailAndPasswordAuth = true;
      },

      getEmailAuth:(state,{ payload }) => {
        if( payload.status === 'success'){
            state.beenAuthenticated = true;
            state.userDetails = payload.userDetails;
         }
      },

      browserSessionAuth:(state,{ payload }) => {
         if( payload.status === 'success'){
            state.beenAuthenticated = true;
            state.userDetails = payload.userDetails;
         }
      },

      setLoadingState: (state,{payload}) => {
         state.inLoadingState = payload
      }
   }
})


export const {
   continuedWithGoogle,
   continuedWithEmailAndPassword,
   getEmailAuth,
   browserSessionAuth,
   setLoadingState,
   getGoogleAuthUser 
} = userAuthSlice.actions;

export default userAuthSlice.reducer;