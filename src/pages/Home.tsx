import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Main>
      <section>This is Home Page</section>
      <div>
        <Link to="/about">About Page</Link>
      </div>
      <div>
        <Link to="/sign-up">Sign Up</Link>
      </div>
      <div>
        <Link to="/sign-in">Sign In</Link>
      </div>
      <div>
        <Link to="/user">User</Link>
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
