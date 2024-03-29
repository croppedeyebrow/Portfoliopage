 import { createGlobalStyle } from "styled-components";




 const GlobalStyle = createGlobalStyle`


 //Here we are setting the global styles for the entire application


 *, *::before, *::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;    
 } 

 h1,h2,h3,h4,h5,h6{
    display: inline-block;
 }

 body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
 }
`
 export default GlobalStyle;