import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 400px;
  border-radius: 50px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 20px 20px 60px ${props => props.theme.colors.darkShadow},
    -20px -20px 60px ${props => props.theme.colors.lightShadow};
  padding: 1em;
  transition: all 0.5s;

  & > img {
    width: 100%;
    border-radius: 50px;
    opacity: 0.8;
  }

  & > h1 {
    color: ${props => props.theme.colors.text};
    font-size: 1.2em;
    font-weight: 800;
    text-transform: uppercase;
  }

  & > p {
    color: ${props => props.theme.colors.text};
    padding: 0 8%;
    font-size: 1em;
    text-align: center;
    line-height: 1.4166666667em;
  }

  & > a {
    color: ${props => props.theme.colors.orange};
    font-size: 1.1em;
    font-weight: 800;
    text-transform: uppercase;
  }

  & > button {
    width: 70%;
    padding: 0.6em;
    border: none;
    color: ${props => props.theme.colors.text};
    border-radius: 15px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.1em;
    background: ${props => props.theme.colors.primary};
    box-shadow: inset 5px 5px 15px ${props => props.theme.colors.darkShadow},
      inset -5px -5px 15px ${props => props.theme.colors.lightShadow};
  }
`;
