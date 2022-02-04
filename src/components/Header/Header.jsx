import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='navbar'>
      <input type="checkbox" id='burger-checkbox'/>
      <label htmlFor="burger-checkbox" className='burger-label'></label>
      <Link to='/' className='logo'>
        <img src='/rickLogo.png' alt='Rick and Morty' />
      </Link>
      <a href='#characters' id='characters-link'>Characters</a>
      <a href='#footer' id='footer-link'>Footer</a>
    </header>
  );
}
