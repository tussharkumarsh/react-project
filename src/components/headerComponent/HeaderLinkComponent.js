import React from 'react'
function LinkComponent(props) {
    return <a href={props.link}>{props.linkText}</a>
}
export default LinkComponent;