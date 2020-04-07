import styled from "styled-components";
import { type } from "os";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5%;
  width: 100%;
  transition: all 0.5s;

  & > h1 {
    font-size: 2em;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin: 2em 0;
  }

  & > ol {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > dl {
      display: flex;
      justify-content: center;
      margin: 1em;
      flex: 1;
      min-height: 350px;
      min-width: 300px;
    }
  }

  & > section {
    width: 90%;
    margin-top: 5%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2em 0;
`;

export const Input = styled.input`
  font-size: 1em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  padding: 1em;
  margin: 1em 0;
  border: none;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: inset 5px 5px 15px ${(props) => props.theme.colors.darkShadow},
    inset -5px -5px 15px ${(props) => props.theme.colors.lightShadow};

  &:focus {
    border: none;
    outline: 0;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: 5px 5px 20px ${(props) => props.theme.colors.darkShadow},
      -5px -5px 20px ${(props) => props.theme.colors.lightShadow};
  }
`;

export const Textarea = styled.textarea`
  font-size: 1em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  padding: 1em;
  margin: 1em 0;
  border: none;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: inset 5px 5px 15px ${(props) => props.theme.colors.darkShadow},
    inset -5px -5px 15px ${(props) => props.theme.colors.lightShadow};

  &:focus {
    border: none;
    outline: 0;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: 5px 5px 20px ${(props) => props.theme.colors.darkShadow},
      -5px -5px 20px ${(props) => props.theme.colors.lightShadow};
  }
`;

export const Button = styled.button`
  max-width: 20%;
  min-width: 90px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.orange};
  padding: 1em 0;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 5px 5px 20px ${(props) => props.theme.colors.darkShadow},
    -5px -5px 20px ${(props) => props.theme.colors.lightShadow};

  &:active {
    box-shadow: none;
  }

  &:focus {
    border: none;
    outline: 0;
  }
`;
