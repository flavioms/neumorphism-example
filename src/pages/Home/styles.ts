import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em 5%;
  transition: all 0.5s;

  & > h1 {
    font-size: 2em;
    font-weight: 700;
    text-transform: uppercase;
    margin: 2em 0;
  }

  & > ol {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > dl {
      flex: 1;
      margin: 0 1em;
      min-width: 230px;
    }
  }
`;
