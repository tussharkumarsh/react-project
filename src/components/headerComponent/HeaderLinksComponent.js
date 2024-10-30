import React from 'react'
import './HeaderComponent.scss'
import LinkComponent from './HeaderLinkComponent';

function HeaderLinksComponent() {

    const links = [
        { id: 1, link: 'Home', linkText: 'Home' },
        { id: 2, link: 'About', linkText: 'About' },
        { id: 1, link: 'Services', linkText: 'Services' },
        { id: 1, link: 'Contact', linkText: 'Contact' },
    ];

    return (
        <nav>
            <ol class="nav-list">
                {
                    links.map(link => {
                        return <li class="nav-item">
                            <LinkComponent link={link.link} linkText={link.linkText} />
                        </li>
                    })
                }
            </ol>
        </nav>
    )
}

export default HeaderLinksComponent;