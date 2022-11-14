import { Link } from 'react-router-dom';
import Nav from './Nav';
import headerLogo from '../assets/headerLogo.svg';
import '../styles/Header.css';

function Header() {
   return (
      <div className="header">
         <Link to="/" title="Home">
            <img className="logo" src={headerLogo} alt="logo-kasa-pink" />
         </Link>
         <Nav />
      </div>
   );
}

export default Header;
