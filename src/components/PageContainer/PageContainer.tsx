import styled from "styled-components";

const PageContainer = styled.main`
  flex-grow: 1;
  background: ${(props) => props.theme.colors.bgColor};
  padding: 4em 4rem;
`;

export default PageContainer;
