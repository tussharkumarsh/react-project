import './HeaderComponent.scss';
import HeaderLogoComponent from './HeaderLogoComponent';
import HeaderLinksComponent from './HeaderLinksComponent';
import HeaderButtonComponent from './HeaderButtonComponent';

function HeaderComponent() {
  return (
    <div className='topHeader'>
      <HeaderLogoComponent />
      <HeaderLinksComponent />
      <HeaderButtonComponent />
    </div>
  );
}
export default HeaderComponent;