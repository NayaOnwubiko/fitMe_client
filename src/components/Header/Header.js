import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkClassName = ({ isActive }) => {
    if (isActive) {
      return "header__nav__option--active";
    } else {
      return "header__nav__option";
    }
  };

  return (
    <header className="header">
      <div className="header__tablet-view">
        <div className="header__logo-container">
          <NavLink to="/">
            <img
              className="header__logo"
              src=""
              alt="avatar"
            />
          </NavLink>
        </div>
        <div className="header__nav">
          <NavLink className={navLinkClassName} to="/schedule">
            <h3 className="header__nav__option">Schedule</h3>
          </NavLink>
          <NavLink className={navLinkClassName} to="/edit-profile">
            <h3 className="header__nav__option">Edit Profile</h3>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
export default Header;