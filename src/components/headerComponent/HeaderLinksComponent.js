import React from 'react'
import '../../App.scss'
import LinkComponent from './HeaderLinkComponent';

function HeaderLinksComponent() {
    return (
        <nav>
            <ol class="nav-list">
                <li class="nav-item"> <LinkComponent link="Home" linkText="Home" /></li>
                <li class="nav-item"> <LinkComponent link="About" linkText="About" /></li>
                <li class="nav-item"> <LinkComponent link="Services" linkText="Services" /></li>
                <li class="nav-item"> <LinkComponent link="Contact" linkText="Contact" /></li>
            </ol>
        </nav>
    )
}

export default HeaderLinksComponent;