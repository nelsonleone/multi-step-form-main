import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./userAuthSlice"
import formReducer from "./formSlice";
import inputedDetailsReducer  from "./userInputedDetails";


const AppStore = configureStore({
   reducer:{
      InputedDetails: inputedDetailsReducer,
      userAuth:userAuthReducer,
      form:formReducer,
   }
})

export default AppStore;