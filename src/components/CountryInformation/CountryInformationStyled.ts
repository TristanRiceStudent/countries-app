import styled from "styled-components";

export const CountryInformationStyled = styled.div`
  .countryNameHeading {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.textColor};
    margin-bottom: 1em;
  }

  .statistics {
    display: flex;
    justify-content: space-between;
  }

  .country-statistics {
    display: flex;
    flex-direction: column;
    row-gap: 0.3em;
    font-size: 3rem;
    margin-bottom: 2em;
    grid-auto-flow: column;
    > * {
      font-size: 1.4rem;
    }
  }

  .country-borders {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1em;

    b {
      color: ${(props) => props.theme.colors.textColor};
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    .statistics {
      flex-direction: column;
      justify-content: unset;
    }
  }
`;
