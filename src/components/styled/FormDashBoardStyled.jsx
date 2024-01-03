import styled from "styled-components";
import { flexObj } from "./utils/StyledMixins";
import { FormCard } from "./utils/StyledUtils";


export const StyledFormDashBoard = styled.section`
   width:100%;
   height: 100vh;
  
   h2{
      color:var(--marine-Blue);
      font-weight: 700;
   }

   p{
      margin-block:.5em 1em;
      color:var(--cool-Gray);
   }

   .AT-only{
      width:1px;
      height:1px;
      clip:rect(0,0,0,0);
      left:-100000px;
      position: absolute;
      font-size:1px;
   }



   @media (min-width:50rem){
      ${flexObj({align:"flex-start"})};
      width:52em;
      background:var(--White);
      padding:1em;
      border-radius: 15px;
      margin:auto;
      box-shadow: 0 0 4px 4px #dddddd86;
      position: relative;

      h2{
         font-size:2rem;
      }
   }
`
export const StyledAsideSection = styled.div`
  background: url('/images/bg-sidebar-mobile.svg');
  background-size:cover;
  width:100%;
  background-position:top;
  background-position-y:-.3em;
  background-repeat: no-repeat;
  height:10.5em;
  text-align: center;
  
  ul{
   position: relative;
   top:2em;
  }


  @media (min-width:50rem){
      width:29%;
      border-radius: 13px;
      background-position: ;
      height:30em;
      background: url('/images/bg-sidebar-desktop.svg');
      background-position: bottom ;
      padding-bottom:1em;
      background-position-y:-1em;
   }
  
`

export const  StyledTabIndicator = styled.li`
  display:inline-block;
  margin-inline:.5em;
  font-weight: 500;
  color: ${({isActive}) => isActive ?  "var(--marine-Blue)" : "var(--White)"};
  text-align: left;
  margin-block:1em;

  @media (min-width:50rem) {
   ${flexObj({justify:"flex-start"})};
   gap:20px;
   margin-inline:1em;
   margin-top:0;
  }
  
  & > span:first-of-type{
    border:1px solid var(--White);
    border-radius: 50%;
    width:2em;
    display:block;
    aspect-ratio:1/1;
    ${flexObj({justify:"center"})};
    background-color:${({isActive}) => isActive ? "var(--light-Blue)" : "transparent"};
   }

   span:last-of-type{
    display:none;


    @media (min-width:50rem){
      display:block;
      color:var(--White);
      text-transform: uppercase;

      span[aria-label="form level"]{
        font-weight:400;
        color:var(--light-Gray);
        font-size:.8rem;
      }
    }
   }
`





export const StyledPersonalInfoArea = styled.div`
   ${FormCard};

   div{
      margin-top:.8em;
   }

   input{
      width: 90%;
      margin-inline:auto;
      border:1px solid var(--light-Gray);
      padding:.7em;
      border-radius: 4px;
      margin-top:.3em;
     &::placeholder{
      color:#6d6d72;
      font-family: inherit;
      font-size:.9rem;
     }
   }
   

   label{
      color:var(--marine-Blue);
      display:block;
   }


   @media (min-width:50rem) {
      div:first-of-type{
         margin-top:2em;
      }

      div{
         margin-block: 1.5em;
      }
   }
`

export const SelectPlanArea = styled.section`
   ${FormCard};

   @media (min-width:50rem) {
      & > div{
         ${flexObj({direction:"row"})};
         gap:20px;

         p{
            font-family: var(--ff2);
            margin-top:.8em;
         }
      }
   }
`
export const StyledToggleArea = styled.div`
   background: var(--Magnolia);
   padding-block: .3em;
   margin-block:1em .3em;
   max-height:2.8em;
   border-radius: 5px;
   ${flexObj({justify:"center"})};
   gap:25px;


   @media (min-width:50rem) {
      padding-inline:7em;
   }

   p{
      font-weight:500;
      font-size:.95rem;
      font-family:var(--ff) !important;
   }

   p:first-of-type{
      color:${({selected}) => selected === "monthly" ? "var(--marine-Blue)" : "var(--cool-Gray)"};
   }

   p:last-of-type{
      color:${({selected}) => selected === "yearly" ? "var(--marine-Blue)" : "var(--cool-Gray)"};
   }

   div{
      width:2.4em;
      height:1.25em;
      border-radius: 20px;
      background-color:var(--marine-Blue);
      display:block;
      position: relative;

      button{
         background:var(--White);
         width:1em;
         aspect-ratio: 1/1;
         border-radius: 50%;
         z-index:100;
         position: absolute;
         top:-50%;
         bottom:-50%;
         margin-block:auto;
         display:block;
         left:${({selected}) => selected === "yearly" ? "55%" : "10%"};
         span{
            position: absolute;
            left:-100000px;
            top:-100000px;
         }
      }

   }
`

export const StyledPlanCard = styled.div`
   margin-block:.7em;
   border-radius:6px;
   ${flexObj({justify:"start",align:"start"})};
   gap:10px;
   padding-left:1em;
   padding-block:.5em;
   cursor:pointer;
   transition:.2s linear;
   border:${({selected}) => selected ? ".12em solid var(--purplish-Blue)" : "1px solid var(--light-Gray)"};

   &:hover{
      border:1px solid #0b2ef56a;
   }
  

   h3{
      color:var(--marine-Blue);
      font-weight:500;
      font-size:1.05rem;
      text-transform: capitalize;
   }
   p{
      line-height: 7px;
      font-size:.9rem;
   }

   p + p{
      font-size:.94rem;
      color:var(--marine-Blue);
   }

   @media (min-width:50rem) {
      padding:.5em .5em 0;
      height:10em;
      margin-top:1em;
      width:8.5em;
      ${flexObj({justify:"space-evenly",align:"start",direction:"column"})};

      h3{
         margin-top:1em;
      }
   }
`

export const StyledAddOnArea = styled.div`
   ${FormCard};
   
   @media (min-width:50rem) {
      width:60%;
   }
`

export const StyledAddOnCard = styled.div`
   ${flexObj};
   margin:1em auto;
   position: relative;
   border:${({checked}) => checked ? "1px solid var(--purplish-Blue)" : "1px solid var(--light-Gray)" };
   border-radius: 5px;
   height:4em;
   padding:1em;
   padding-right:.6em;
   background:${({checked}) => checked && "var(--Magnolia)"};
   transition:.3s ease-in-out;
   cursor:pointer;

   &:hover{
      border:1px solid var(--purplish-Blue);
   }

   @media (min-width:50rem) {
      width:100%;
      margin: 1.5em 0;
   }

   h3{
      font-size:1.1rem;
      color:var(--marine-Blue);
      font-weight:500;
   }

   p{
      font-size:.8rem;
      line-height:3px;
   }

   div:last-of-type{
      position: absolute;
      width:100%;
      left:2.5em;
   }

   div + p{
      color:var(--purplish-Blue);
   }
`


export const StyledSummary = styled.div`
  ${FormCard};

  h3{
   font-size:1rem;
  }

  @media (min-width:50rem) {
      width:32em;
   }
`

export const StyledSummaryDetailsContainer = styled.div`
  background:#eceaea76;
  border-radius: 5px;
  padding:1em;
  & > div{
   ${flexObj};
  }

  @media (min-width:50rem) {
      padding:1.5em 1em ;
   }


  h3{
   color:var(--cool-Gray);
   font-weight:400;
   text-transform: capitalize;
  }

  span{
   color:var(--marine-Blue);
   font-size:.9rem;
  }
`

export const StyledSummaryPlanArea = styled.div`

  border-bottom: 1px solid var(--light-Gray);
  padding-bottom:.7em;
  margin-bottom:.7em;
  
  button{
   color: var(--cool-Gray);
   text-decoration:underline;
   text-decoration-color: var(--cool-Gray);
   text-decoration-thickness: 2px;
   transition:.3s ease-in-out;

   &:hover{
      color:var(--purplish-Blue);
      text-decoration-color: var(--purplish-Blue);
   }
  }

   h3{
      color:var(--marine-Blue);
      font-weight: 500;
   }

   span{
      color:var(--marine-Blue);
      font-weight: 500;
  }

  & ~ div{
   margin-bottom:.5em;
  }

  @media (min-width:50rem) {
     padding-bottom:1.2em;
     margin-bottom:1em;
   }
   
`

export const StyledSummaryTotalArea = styled.div`
  ${flexObj};
  margin-top:1em;
  padding-inline:.3em;

  p{
   font-size:.9rem;
  }

  span{
   color: var(--purplish-Blue);
   font-weight:700;
  }
`


export const StyledThankYouPage = styled.section`
   ${FormCard};
   ${flexObj({align:"center",justify:"center",direction:"column"})};
   text-align: center;
   padding-block:1.5em;

   p{
      line-height:23px;
      font-family:var(--ff2);
   }

   div{
      margin-top:3em;

      img{
         width:3.3em;
         margin-bottom:1em;
      }
   }


   @media (min-width:50rem) {
      width:60%;
      margin-top:4em;
   }
`
