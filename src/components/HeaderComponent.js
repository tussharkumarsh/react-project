import React from 'react';
import HeaderLogoComponent from './HeaderLogoComponent';
import HeaderLinksComponent from './HeaderLinksComponent';
import HeaderButtonComponent from './HeaderButtonComponent';
import '../App.css'
function HeaderComponent() {
  return (
    <>
      <div className='topHeader'>
        <HeaderLogoComponent />
        <HeaderLinksComponent />
        <HeaderButtonComponent />
      </div>
    </>
  );
}

export default HeaderComponent;