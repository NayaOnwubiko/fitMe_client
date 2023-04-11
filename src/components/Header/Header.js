import "./Header.scss";
import { NavLink } from "react-router-dom";
import yogaIcon from "../../assets/icons/yoga.svg";
import profileIcon from "../../assets/icons/profile.svg";


function Header() {

  return (
    <header className="header">
          <div className="header__logo">
              <img className="header__logo-image"
                    src={yogaIcon}
                    alt="logo"
                    />
          </div>
          <div className="header__menu">
            <NavLink className="header__menu-link" to="/users/currentuser">
              <img className="header__menu-image"
                  src={profileIcon}
                  alt="profile icon"
                  />
              <p className="header__menu-text">Profile</p>
            </NavLink>
          </div>

    </header>
  )
}
export default Header;