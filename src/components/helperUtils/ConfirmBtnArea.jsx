import { StyledConfirmBtnArea } from "../styled/utils/StyledUtils";

export default function ConfirmBtnArea(props){
   const { moveToPrevStep, confirm } = props;

   return(
      <StyledConfirmBtnArea>
         <button onClick={moveToPrevStep}>Go Back</button>
         <button onClick={confirm}>Confirm</button>
      </StyledConfirmBtnArea>
   )
}