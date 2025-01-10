import React from 'react';
function LinkComponent(props) {
    return <a className="nav-link" href={props.link}>{props.linkText}</a>;
}
export default LinkComponent;