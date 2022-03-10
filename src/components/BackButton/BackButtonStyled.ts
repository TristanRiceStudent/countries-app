import styled from "styled-components";
import { boxShadow } from "../../styles/snippets";
import LinkButton from "../LinkButton/LinkButton";

export const BackButtonStyled = styled(LinkButton)`
  ${boxShadow};

  > *:first-child {
    margin-right: 10px;
  }
`;
