import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import HeaderButton from './HeaderButton';
import '../App.css'
function Header() {
  return (
    <>
    <div className='topHeader'>
    <HeaderLogo/>
    <HeaderLinks/>
    <HeaderButton/>
    </div>
    </>
  );
}

export default Header;