import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
