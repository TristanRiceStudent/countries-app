import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  background: ${(props) => props.theme.colors.elementsColor};
  font-size: 1.2rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColor};
  padding: 0.75em 2em;
  border-radius: 5px;
`;

export default LinkButton;
