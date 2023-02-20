export default function ErrorAnalyzer(nameRef,emailRef,phoneNumberRef){
   const name = nameRef.current.value;
   const email = emailRef.current.value;
   const phone = phoneNumberRef.current.value;
   const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const letterRegex = /^[^a-z]*$/i;
   const containsLetters = letterRegex.test(phone)


   if( name === ""){
      return "Name can't be empty"
   }
   else if(email === "" || !email.match(EMAIL_REGEX)){
      return "Enter a valid email address"
   }else if(phone === ""){
      return "Phone input can't be empty"
   }else if (!containsLetters){
      return "Enter a valid phone number"
   }
}