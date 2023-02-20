import { useRoutes } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import FormDashBoard from "./components/formComponents/FormDashBoard";
import {useSelector}  from "react-redux";
import PageNotFound from "./components/404page";
import { useEffect } from "react";
import {useNavigate, useLocation } from "react-router-dom";



export default function RouteComponent(){
   const navigate = useNavigate()
   const location = useLocation()
   const { beenAuthenticated } = useSelector(store => store.userAuth)
   const routeElements = useRoutes([
      {
         path: "/",
         element:  <FormDashBoard />
      },
      {
         path: "/signin",
         element: <SignInPage />
      },
      {
         path: "/signup",
         element:<SignUpPage />
      },
      {
         path: "*",
         element: <PageNotFound />
      }
   ])


   return(
      routeElements
   )
}