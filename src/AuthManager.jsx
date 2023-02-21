import { provider , auth} from "./firebase/firebase-config";
import { useSelector , useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { browserSessionPersistence, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { 
  getEmailAuth, 
  getGoogleAuthUser,
  browserSessionAuth ,
  setLoadingState
} from "./features/userAuthSlice";

import userDetailsObjCreator from "./components/helperUtils/userDetailsObjCreator";
import Loading from "./components/helperUtils/Loading";
import Alert from '@mui/material/Alert';
import { memo } from "react";



function AuthManager(){
  const dispatch = useDispatch()
  const [error,setError] = useState({show:false,message:""})
  const { formData } = useSelector(store => store.form)
  const  {
    usedGoogleAuth ,
    beenAuthenticated, 
    usedEmailAndPasswordAuth,
    inLoadingState
  } = useSelector(store => store.userAuth)
  const navigate = useNavigate()
  const location = useLocation()


  async function handlePopUpSignIn(){
    try{
      setError(prev => {
        return {message:"",show:""}
      })
      await signInWithPopup(auth,provider)

    }
    catch(err){
      setError({show:true,message:err.code})


      setTimeout(() => {
        setError({show:"",message:""})
      }, 2000);
    }
  }


  function callHandlePopUp(){
    handlePopUpSignIn()
  }


  useEffect(()  => {
    if(!usedGoogleAuth)return;
    callHandlePopUp()
  },[usedGoogleAuth])

  
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      if(formData){
        dispatch(setLoadingState(false))
      }
    }, 3000)
    
    return () => clearTimeout(loaderTimeout)
  },[])
  
  useEffect(() => {
    auth.setPersistence(browserSessionPersistence)
    
    const unsubscribe = onAuthStateChanged(auth,user => {
      if(user && usedGoogleAuth){
        dispatch(getGoogleAuthUser({status:'success', userDetails:userDetailsObjCreator(user)}))
      }
      
      else if(user && usedEmailAndPasswordAuth){
        dispatch(getEmailAuth({status:'success',userDetails:userDetailsObjCreator(user)}))
      }
      
      else if(user && !usedGoogleAuth && !usedEmailAndPasswordAuth){
        dispatch(browserSessionAuth({status:'success',userDetails:userDetailsObjCreator(user)}))
      }
    })
    
    return unsubscribe
  },[auth.currentUser])
  
  
  // signOut(auth)

  useEffect(() => {
    if(beenAuthenticated){
      setShowSuccessAlert(true)
    }

    const alertTimer = setTimeout(() => {
      setShowSuccessAlert(false)
    }, 3000)


    return ()  => clearTimeout(alertTimer)
      
  },[beenAuthenticated,location.pathname])


  useEffect(() => {
    if(location.pathname === "/" && !beenAuthenticated && !inLoadingState){
      navigate("/signin") 
    }
    if(beenAuthenticated && location.pathname === "/signin"){
      navigate("/")
    }
    if( beenAuthenticated && location.pathname === "/signup"){
      navigate("/")
    }
  })




//  alert state and styling
  const [showSuccessAlert,setShowSuccessAlert] = useState(beenAuthenticated ? true : false)
  const alertStyling = {
    position:"absolute",
    top:"1em",
    zIndex:"1000",
    fontFamily:"var(--ff2)"

  }


  return(
    <>
        {
          error.show &&
          <Alert severity="error" style={alertStyling}>{error.message}</Alert>
        }
        {
          showSuccessAlert &&
          <Alert severity="success" style={alertStyling}>Login Successful</Alert>
        }
        {
          inLoadingState &&
          <Loading />
        }
    </>
  )
}

export default AuthManager