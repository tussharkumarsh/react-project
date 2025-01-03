import './HeaderComponent.scss';
import HeaderLogoComponent from './HeaderLogoComponent';
import HeaderLinksComponent from './HeaderLinksComponent';
import HeaderButtonComponent from './HeaderButtonComponent';

function HeaderComponent() {
  return (
    // <div className='topHeader'>
    //   <HeaderLogoComponent />
    //   <HeaderLinksComponent />
    //   <HeaderButtonComponent />
    // </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <HeaderLogoComponent />
        <div className="collapse navbar-collapse" id="navbarNav">
          <HeaderLinksComponent />

          <div className="d-flex">
            <HeaderButtonComponent />
            {/* <a href="#" className="btn btn-outline-primary">Login</a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default HeaderComponent;