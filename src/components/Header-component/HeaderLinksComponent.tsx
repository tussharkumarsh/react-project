import { useState } from 'react';
import './HeaderComponent.scss';
import LinkComponent from './HeaderLinkComponent';

function HeaderLinksComponent() {

    const [links] = useState([
        { id: 1, link: 'Home', linkText: 'home' },
        { id: 2, link: 'About', linkText: 'about' },
        { id: 3, link: 'Services', linkText: 'services' },
        { id: 4, link: 'Contact', linkText: 'contact' },
        { id: 4, link: 'Cart', linkText: 'cart' },
    ]);
    return (
        <nav>
            <ol className="nav-list">
                {
                    links.map(link => {
                        return <li className="nav-item" key={link.id}>
                            <LinkComponent link={link.link} linkText={link.linkText} />
                        </li>;
                    })
                }
            </ol>
        </nav>
    );
}
export default HeaderLinksComponent;