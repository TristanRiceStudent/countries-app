import styled from "styled-components";

export const ColourSchemeToggleStyled = styled.button`
  color: ${(props) => props.theme.colors.textColor};
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
  font-weight: 600;
`;
