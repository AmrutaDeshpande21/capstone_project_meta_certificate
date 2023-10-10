import React from 'react';
// import LogoImg from './Logo.svg';


const Header = () => {
  return (
    <nav>
    <ul>
        <li> <img src="./assets/Logo.svg" alt="Logo Image Little Lemon Restaurant"/></li>
      <li><a href="./Home" role="button">Home</a></li>
      <li><a href="./Home" role="button">About</a></li>
      <li><a href="./Home" role="button">Menu</a></li>
      <li><a href="./Home" role="button">Reservation</a></li>
      <li><a href="./Home" role="button">Order Online</a></li>
      <li><a href="./Home" role="button">Login</a></li>

    </ul>
    </nav>
  )
}

export default Header

