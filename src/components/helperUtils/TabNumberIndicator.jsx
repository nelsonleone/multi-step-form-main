import { StyledTabIndicator } from "../styled/FormDashBoardStyled"

export default function TabNumberIndicator(props){
   const {number, heading, isActive}  = props

   return(
      <StyledTabIndicator isActive={isActive}>
         <span aria-hidden="true">{number}</span>
         <span>
            <span aria-label="form level">Step {number}</span>
            <span aria-label="form level heading">{heading}</span>
         </span>
      </StyledTabIndicator>
   )
}