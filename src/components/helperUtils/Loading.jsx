export default function Loading(){
   return(
       <img 
         src="/images/loading.svg" 
         alt="is loading" 
         width={100}
         style={
            {position:"absolute",
               top:"0",
               bottom:"0",
               margin:"auto",
               display:"block",
               right:"0",
               left:"0"
            }
         }
      />
   )
}