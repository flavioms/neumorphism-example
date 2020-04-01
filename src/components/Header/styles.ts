import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em auto;
  width: 90%;
  height: 80px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 2em;
  transition: all 0.5s;
  border-radius: 50px;
  box-shadow: 20px 20px 60px ${props => props.theme.colors.darkShadow},
    -20px -20px 60px ${props => props.theme.colors.lightShadow};

  & > img {
    width: 100%;
    max-width: 70px;
    filter: ${props =>
      props.theme.title === "light" ? "invert(0)" : "invert(1)"};
  }

  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1em;
    font-weight: 700;

    li {
      margin: 0 1.5em;
    }
  }
`;
