import { useState } from 'react';
import './HeaderComponent.scss';
import LinkComponent from './HeaderLinkComponent';

function HeaderLinksComponent() {
    const [links] = useState([
        { id: 1, link: '/', linkText: 'Home' },
        { id: 2, link: 'about', linkText: 'About' },
        { id: 3, link: 'services', linkText: 'Services' },
        { id: 4, link: 'contact', linkText: 'Contact' },
        { id: 5, link: 'cart', linkText: 'Cart' },
    ]);
    return (
        <ul className="navbar-nav mx-auto">
            {
                links.map(link => {
                    return <li className="nav-item" key={link.id}>
                        <LinkComponent link={link.link} linkText={link.linkText} />
                    </li>;
                })
            }
        </ul>
    );
}
export default HeaderLinksComponent;