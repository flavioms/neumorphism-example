import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.5s;
  }

 
`;
