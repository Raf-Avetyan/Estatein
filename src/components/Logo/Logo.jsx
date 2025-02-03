import { Link } from 'react-router-dom';

import "./Logo.scss";

export function Logo() {
  return (
    <Link to={"/"} className='logo'>
      <img src="/public/icons/logo.svg" alt="Logo" />
      <span>Estatein</span>
    </Link>
  );
}
