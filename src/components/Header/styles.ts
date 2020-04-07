import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em auto;
  width: 90%;
  min-width: 320px;
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 2em;
  transition: all 0.5s;
  border-radius: 50px;
  box-shadow: 20px 20px 60px ${(props) => props.theme.colors.darkShadow},
    -20px -20px 60px ${(props) => props.theme.colors.lightShadow};

  & > img {
    width: 100%;
    max-width: 70px;
    filter: ${(props) =>
      props.theme.title === "light" ? "invert(0)" : "invert(1)"};
  }
`;

export const Menu = styled.ul`
  display: flex;

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 2em;
  letter-spacing: 3px;
  font-size: 1em;

  li {
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.orange};
      transition: color 0.2s;
    }
  }

  @media screen and (max-width: 992px) {
    li:nth-child(n + 4) {
      display: none;
    }
  }

  @media screen and (max-width: 520px) {
    li {
      display: none;
    }
  }
`;
