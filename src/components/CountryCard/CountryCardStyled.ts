import styled from "styled-components";
import { boxShadow } from "../../styles/snippets";

export const CountryCardStyled = styled.div<{ isHidden?: boolean }>`
  border-radius: 5px;
  display: grid;
  grid-template-rows: 160px 160px;
  height: 320px;
  width: 265px;
  color: ${(props) => props.theme.colors.textColor};
  ${(props) => props.isHidden && "display: none"};
  ${boxShadow}

  a {
    text-decoration: none;
    color: unset;
  }

  .card-image {
    border-radius: 5px 5px 0px 0px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .card-information {
    padding: 2em;
    border-radius: 0px 0 5px 5px;
    background: ${(props) => props.theme.colors.elementsColor};

    .country-name {
      margin-bottom: 1.5em;
      font-size: 1.4rem;
    }

    .country-statistic {
      margin-bottom: 0.5em;
    }
  }
`;
