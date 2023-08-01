import { Link } from 'react-router-dom';
import style from './home.module.css';

export default function Home() {
  return (
    <main className={style.main}>
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
