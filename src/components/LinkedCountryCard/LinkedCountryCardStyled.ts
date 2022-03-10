import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkedCountryCardStyled = styled(Link)<{ isHidden?: boolean }>`
  text-decoration: none;

  ${(props) => props.isHidden && "display: none"};
`;
