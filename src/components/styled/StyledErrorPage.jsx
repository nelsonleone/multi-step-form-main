import styled from "styled-components";


export  const StyledErrorPage = styled.div`
   width:100vw;
   min-height:100vh;
   display:flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   background-color: var(--cool-Gray);
   color:var(--White);

   h2{
      font-size:1.8rem;
   }

   h3{
      font-size:3.2rem;
   }

   a{
      display: block;
      color: #0cecec;
      margin-top:2em;
      font-family: var(--ff2);
      font-weight: 500;
      text-transform: uppercase;
   }
`