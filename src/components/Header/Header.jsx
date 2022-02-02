import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='navbar'>
      <a href='#characters'>Characters</a>
      <Link to='/' className='logo'>
        <img src='/rickLogo.png' alt='Rick and Morty' />
      </Link>
      <a href='#footer'>Footer</a>
    </header>
  );
}
