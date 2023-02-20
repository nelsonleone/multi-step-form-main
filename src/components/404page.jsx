import { Link } from "react-router-dom";
import { StyledErrorPage } from "./styled/StyledErrorPage";

export default function PageNotFound(){
   return(
      <StyledErrorPage>
         <h2>Page Not Found</h2>
         <h3>404</h3>
         <Link to="/">Go To Home</Link>
      </StyledErrorPage>
   )
}