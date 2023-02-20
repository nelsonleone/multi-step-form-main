export default function userDetailsObjCreator(user){
   return {
      displayName: user.displayName,
      photoUrl:user.providerData[0].photoURL || user.photoURL,
      email:user.email,
      userID:user.uid
   }
}