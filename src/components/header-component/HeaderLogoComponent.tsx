function HeaderLogoComponent() {
    return <>
        <a className="navbar-brand" href="#">
            <img src='logo.svg' className='logo' alt='Product img' />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    </>;


}
export default HeaderLogoComponent;