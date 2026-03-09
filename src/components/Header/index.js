import {Link, NavLink} from 'react-router-dom'
import './index.css'

const Header = () => (
  <header className="app-header">
    <nav className="nav">
      <Link to="/" className="brand">
        COVID19<span className="brandsecond">INDIA</span>
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact activeClassName="highlight">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="highlight">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
