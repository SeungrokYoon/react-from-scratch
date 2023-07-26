import './style.css';

interface NavBarProps {
  childern: string;
}

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>menu1</li>
          <li>menu1</li>
          <li>menu1</li>
        </ul>
      </nav>
    </header>
  );
}
