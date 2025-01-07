import './HeaderComponent.scss';
import HeaderLogoComponent from './HeaderLogoComponent';
import HeaderLinksComponent from './HeaderLinksComponent';
import HeaderButtonComponent from './HeaderButtonComponent';

function HeaderComponent() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
      <div className="container-fluid">
        <HeaderLogoComponent />
        <div className="collapse navbar-collapse" id="navbarNav">
          <HeaderLinksComponent />

          <div className="d-flex">
            <HeaderButtonComponent />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default HeaderComponent;