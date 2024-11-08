import React from 'react'
import './HeroComponent'

function HeroCardComponent(props) {
    return (
        <div className="card">
            <img src={props.productImage} className="card-img-top" alt="Card Thumbnail" />
            <div className="card-body text-center">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text">{props.productDescription}</p>
            </div>
        </div>
    )
}
export default HeroCardComponent;