import styled from "styled-components";

const CountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;

  @media only screen and (max-width: ${(props) => props.theme.sizes.mobile}) {
    justify-content: center;
  }
`;

export default CountriesContainer;
