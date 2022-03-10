import styled from "styled-components";
import { boxShadow } from "../../../styles/snippets";

export const SelectInputStyled = styled.div`
  ${boxShadow};
  border-radius: 5px;

  .select-input,
  .select-input__control {
    height: 100%;
    border: none;
    background-color: ${(props) => props.theme.colors.elementsColor};
    border-radius: 5px;
  }
  .select-input__value-container {
    padding: 2px 20px;
  }

  .select-input__indicator.select-input__dropdown-indicator {
    padding: 8px 20px 8px 8px;
  }

  .select-input__indicators {
    .select-input__indicator-separator {
      display: none;
    }

    .select-input__dropdown-indicator svg {
      width: 15px;
      height: 15px;
      color: ${(props) => props.theme.colors.textColor};
    }
  }

  .select-input__menu {
    background: ${(props) => props.theme.colors.elementsColor};

    .select-input__option {
      padding: 5px 12px;
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.textColor};

      &--is-selected,
      &--is-focused {
        background: transparent;
      }
    }
  }

  .select-input__single-value,
  .select-input__placeholder {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textColor};
  }

  @media only screen and (max-width: ${(props) => props.theme.sizes.mobile}) {
    width: 60%;
  }
`;
