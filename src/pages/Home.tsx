import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section>This is Home Page</section>
      <div>
        <Link to="/about">About Page</Link>
      </div>
      <div>
        <a href="/" target="">
          Home
        </a>
      </div>
    </main>
  );
}
