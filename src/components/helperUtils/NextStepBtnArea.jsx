import { StyledNextStepBtnArea } from "../styled/utils/StyledUtils"


export default function NextStepBtnArea(props){
   const { goBackIsActive, moveToNextStep, moveToPrevStep }  = props;

   return(
      <StyledNextStepBtnArea>
         {
            goBackIsActive &&
            <button onClick={moveToPrevStep} aria-label="go back to previous step">Go Back</button>
         }
         <button onClick={moveToNextStep}>Next Step</button>
      </StyledNextStepBtnArea>
   )
}