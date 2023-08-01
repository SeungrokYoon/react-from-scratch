import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function PageLayout({ children }) {
  return <Main>{children}</Main>;
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
