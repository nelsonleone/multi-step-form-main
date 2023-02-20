import { StyledThankYouPage } from "../styled/FormDashBoardStyled";

export default function ThankYou(){
   return(
      <StyledThankYouPage>
         <div>
            <img src="/images/icon-thank-you.svg" alt=""  aria-label="hidden" />
            <h2>Thank You!</h2>
            <p>
               Thanks for confirming your subscription!
               <br></br>
               We hope you have fun using our platform. If you ever need support, please feel free
               to contact us at support@loremgaming.com
            </p>
         </div>
      </StyledThankYouPage>
   )
}