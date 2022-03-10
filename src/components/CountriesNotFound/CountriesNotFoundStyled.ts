import styled from "styled-components";

export const CountriesNotFoundStyled = styled.div`
  margin: auto;
  text-align: center;
  background: ${(props) => props.theme.colors.bgColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 3rem;
  }

  .description {
    font-size: 1.5rem;
  }
`;
