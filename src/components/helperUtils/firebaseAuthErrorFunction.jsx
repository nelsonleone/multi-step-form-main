export default function firebaseAuthErrorFunction(errorCode){
   if(errorCode === "auth/user-not-found"){
      return "User not found"
   }else if(errorCode === "auth/invalid-password"){
      return "Input a Valid Password"
   }else if(errorCode === "auth/invalid-email"){
      return "Invalid Email"
   }else if(errorCode === "auth/email-already-in-use"){
      return "Email already in use"
   }else if(errorCode === "auth/wrong-password"){
      return "Wrong Password"
   }
}