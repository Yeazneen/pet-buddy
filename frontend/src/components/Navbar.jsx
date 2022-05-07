import Logo from './Yellow-Paws.jpeg';
//import { useHistory } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <nav>
        <img className="Logo" src={Logo} alt={props.alt}></img>

        <ul className="List">
          <li>
            <a className="NavList" href={`/services`}>
              Services
            </a>
          </li>
          <li>
            <a className="NavList" href={`/shop`}>
              Pet Shop
            </a>
          </li>
          <li>
            <a className="NavList" href={`/login`}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
