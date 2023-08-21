import styled, { css } from "styled-components";
import { flexObj } from "./utils/StyledMixins";
 


export const StyledForm = styled.form`
   max-width:90%;
   height:75%;
   margin:auto;
   position:absolute;
   border-radius: 10px;
   padding:1em;
   background: var(--purplish-Blue);
   color:var(--White);
   right:-50%;
   left:-50%;
   top:-50%;
   bottom:-50%;
   font-family: var(--ff2) ;

   h2 + img{
      width:5em;
      position: relative;
      display:block;
      left:0;
      right:0;
      margin:auto;
   }


   label{
      display:block;
      margin-top:1em;
   }
   input{
      border-radius:2px;
      padding:.4em 1em;
      display:block;
      width:90%;
   }

   a,
   button{
      color:var(--White);
   }

   button{
      display:block;
      width:80%;
      margin:1em auto;
      background:#c00bd8;
      padding:.5em;
      border-radius: 3px;
   }


   div:last-of-type{
      ${flexObj};
      margin-top:2.5em;


      a:last-of-type{
         ${flexObj};
         img{
            width:2.5em;
         }
      }
   }

   @media (min-width:50rem) {
      max-width:30em;
   }
`

export const FormBgWrapper = styled.div`
   position: fixed;
   background: var(--White);
   top:0;
   bottom:0;
   left:0;
   right:0;
   margin:auto;
   height:100%;
   width:100%;

   h1{
      color: black;
      position: absolute;
      top:.4em;
      left:0;
      text-align:center;
      font-weight:500;
      font-size:1.5rem;
      right:0;
      margin:auto;
      max-width:50%;
   }
`
