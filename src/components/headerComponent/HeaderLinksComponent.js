import React, { useState } from 'react'
import './HeaderComponent.scss'
import LinkComponent from './HeaderLinkComponent';

function HeaderLinksComponent() {

    const [links, setLinks] = useState([
        { id: 1, link: 'Home', linkText: 'Home' },
        { id: 2, link: 'About', linkText: 'About' },
        { id: 3, link: 'Services', linkText: 'Services' },
        { id: 4, link: 'Contact', linkText: 'Contact' },
    ]);
    return (
        <nav>
            <ol className="nav-list">
                {
                    links.map(link => {
                        return <li className="nav-item" key={link.id}>
                            <LinkComponent link={link.link} linkText={link.linkText}/>
                        </li>
                    })
                }
            </ol>
        </nav>
    )
}
export default HeaderLinksComponent;