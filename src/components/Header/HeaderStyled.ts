import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.elementsColor};
  font-size: 2rem;
  padding: 1em 4rem;

  .logoLink {
    text-decoration: none;
  }

  .logo {
    font-size: 1em;
    color: ${(props) => props.theme.colors.textColor};
  }

  @media only screen and (max-width: ${(props) => props.theme.sizes.mobile}) {
    font-size: 1.5rem;
  }
`;
