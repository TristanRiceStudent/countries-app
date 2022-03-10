import styled from "styled-components";

export const TextInputStyled = styled.div`
  background: ${(props) => props.theme.colors.elementsColor};
  color: ${(props) => props.theme.colors.inputColor};
  border-radius: 5px;
  border: none;
  display: flex;
  width: max-content;

  &:focus {
    outline: 1px solid black;
  }

  .text-input {
    color: inherit;
    flex-grow: 1;
    font-size: 1.2rem;
    padding: 1.5em 1em 1.5em 0;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: inherit;
    }
  }

  .search-icon {
    font-size: medium;
    width: 65px;
    display: grid;
    place-items: center;
  }
`;
