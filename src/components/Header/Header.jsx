import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <img src='https://infelcom.co/images2/chose1.png' alt='Logo' />
        </Link>
      </div>
    </header>
  );
}
