import styled from "styled-components";
import { flexObj } from "./StyledMixins";



export const StyledErrorPara =  styled.p`
  color:#ff0730 !important;
  position: relative;
  z-index:100;
  font-family: var(--ff2);
  margin-block:.3em;
`
export const FlexContainer =  styled.div`
   display:flex;
   align-items:center;
   justify-content: space-between;

   button{
      display:flex;
      align-items: center;

      img{
         width:2em;
      }
   }
`

export const StyledNextStepBtnArea = styled.div`
  background: var(--White);
  position: absolute;
  bottom:0;
  height:4em;
  width:100%;
  padding-inline:1em;
  ${flexObj({justify:"space-between",align:"center"})};

  button:last-of-type{
      background-color: var(--marine-Blue);
      color:var(--White);
      font-weight:500;
      padding:.8em 1.4em;
      border-radius: 5px;
      position:absolute;
      right:1em;
  }

   button[aria-label="go back to previous step"] {
    color:var(--cool-Gray);
    font-weight:700;
    font-family: var(--ff2);
    transition: all.3s ease-in;

    &:hover{
       color:var(--marine-Blue);
     }
  }

  @media (min-width:50rem) {
     bottom:1em;
     background:transparent;
     max-width:50%;
     right:7em;
  }
  
`

export const StyledConfirmBtnArea = styled.div`
  background: var(--White);
  position: absolute;
  bottom:0;
  height:4em;
  width:100%;
  padding-inline:1em;
  ${flexObj({justify:"space-between",align:"center"})};

  button:last-of-type{
      background-color: var(--purplish-Blue);
      color:var(--White);
      font-weight:500;
      padding:.8em 1.4em;
      border-radius: 5px;
      position:absolute;
      right:1em;

      transition:.3s linear;

      &:hover{
         opacity:.8;
      }
   }

   button:first-of-type{
      color:var(--cool-Gray) ;
      font-weight:500;
      font-family: var(--ff2);

      &:hover{
         color:var(--marine-Blue);
      }
   }

  @media (min-width:50rem) {
     bottom:1em;
     background:transparent;
     max-width:55%;
     right:3em;

     button:last-of-type{
      padding:.9em 1.8em;
     }
   }
`

export const SrOnlyLabel = styled.label`
   top:-1000000px;
   left:-1000000px;
   width:1px;
   position:absolute;
`

export const CustomCheckBoxClass = styled.div`
   position: relative;
   ${flexObj};
   &::before{
      content:"";
      width:calc(100% + .5em);
      background-color:${({checked}) => checked && "#0772ff"};
      z-index:-1;
      aspect-ratio: 1/1;
      position: absolute;
      border-radius: 5px;
      left:-50%;
      right:-50%;
      margin:auto;
   }

   input[type=checkbox]{
      cursor:pointer;
   }
`

export const FormCard = `
   background-color:var(--White);
   border-radius: 10px;
   max-width:90%;
   margin-inline:auto;
   padding:1.5em 1em;
   transform:translateY(-4.8em);
   box-shadow: 0 0 3px 3px #9995953d;
   top:-4.8em;


   @media(min-width:50rem){
      box-shadow:none;
      border-radius:none;
      transform:unset;
   }
`
