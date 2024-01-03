import { createGlobalStyle } from 'styled-components';
import { flexObj } from './utils/StyledMixins';

export  const GlobalStyles =  createGlobalStyle`
  :root{
    --marine-Blue:hsl(213, 96%, 18%);
    --purplish-Blue:hsl(218, 85%, 21%);
    --light-Blue:hsl(206, 94%, 87%);
    --pastel-Blue: hsl(228, 100%, 84%);

    --cool-Gray:hsl(231, 11%, 63%);
    --light-Gray: hsl(229, 24%, 87%);
    --Magnolia: hsl(217, 100%, 97%);
    --White: hsl(0, 0%, 100%);
    --default-fs: 1rem;
    --ff: 'Ubuntu',sans-serif;
    --ff2: 'Overpass',sans-serif;
  }

  html,
  body{
   box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after{
    box-sizing: inherit;
    padding:0;
    margin:0;
  } 

  body{
    font-size: var(--default-Font-size);
    font-family: var(--ff);
    background-color: var(--Magnolia);
    position: relative;


    @media (min-width:50rem){
      ${flexObj({direction:"column",align:"center",justify:"center"})};
    }
  }

  button{
    border:none;
    background:none;
    font-family:inherit;
    font-size:inheirt;
    cursor:pointer;
  }
  input{
    border:none;
    font-family:inherit;
    color:var(--marine-Blue);
  }

  input,label{
    font-family:var(--ff2);
  }

  button:focus{
    border:none;
    outline:none;
  }

  input:focus{
    outline:none;
    border:1px solid var(--light-Gray);
  }


  img{
    max-width:100%;
    object-fit:cover;
  }

  li,
  a{
    text-decoration:none;
    list-style-type:none;
  }
`
