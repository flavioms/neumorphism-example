import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  transition: color 0.5s step-start
    ${props => (props.theme.title === "dark" ? `${1.5 - 0.6}s` : "0s")};
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  list-style: none;
`;
