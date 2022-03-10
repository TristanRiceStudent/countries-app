import styled from "styled-components";
import { boxShadow } from "../../styles/snippets";

export const FiltersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5em;

  .text-input-container {
    flex-basis: 30%;
    ${boxShadow}
  }

  @media only screen and (max-width: ${(props) => props.theme.sizes.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2em;
  }
`;
