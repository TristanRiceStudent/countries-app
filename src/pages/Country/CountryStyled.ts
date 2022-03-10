import styled from "styled-components";
import PageContainer from "../../components/PageContainer/PageContainer";

export const CountryStyled = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .country-information {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8em;
    align-items: center;
    margin: auto;

    .country-image {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    .country-information {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      gap: 5em;
    }

    .backButton {
      margin-bottom: 5em;
    }
  }
`;
