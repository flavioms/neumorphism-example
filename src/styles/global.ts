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
    transition: background-color 0.5s step-start ${props =>
      props.theme.title === "dark" ? `${1.5 - 0.6}s` : "0s"};
  }

  .clip {
    z-index: -1;
    position: fixed;
    top: 3rem;
    right: 3rem;
    width: 0rem;
    height: 0rem;
    border-radius: 100%;
    background: ${props => props.theme.colors.primary};
  }

  .clip.anim {
    -webkit-animation: open 1.5s ease-in;
    animation: open 1.5s ease-in;
  }


@keyframes open {
  0% {
    top: 3rem;
    right: 3rem;
    width: 0rem;
    height: 0rem;
    -webkit-clip-path: circle(0rem at center);
    clip-path: circle(0rem at center);
  }
  100% {
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
    width: 500vmax;
    height: 500vmax;
    -webkit-clip-path: circle(100% at center);
    clip-path: circle(100% at center);
  }
}
}

`;
