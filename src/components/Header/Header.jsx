import { NavLink} from 'react-router-dom';
import { AdBanner } from '../AdBanner/AdBanner';
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <AdBanner />
      <div className="header__container">
        <Logo />
        <div className="header__navigation">
          <nav className="header__menu menu">
            <ul className="menu__list">
              <NavLink to={"/"} className="menu__item">Home</NavLink>
              <NavLink to={"!#"} className="menu__item">About Us</NavLink>
              <NavLink to={"!#"} className="menu__item">Properties</NavLink>
              <NavLink to={"!#"} className="menu__item">Services</NavLink>
            </ul>
          </nav>
        </div>
        <div className='header__right'>
          <Button className={"dark-btn"}>Contact Us</Button>
          <div className="header__dropdown-menu dropdown-menu">
            <img src="/icons/burger.svg" alt="menu" />
          </div>
        </div>
      </div>
    </header>
  );
}