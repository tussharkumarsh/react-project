import React from 'react'
import ProductNameComponent from './ProductComponent/ProductNameComponent'
import ProductDescriptionComponent from './ProductComponent/ProductDescriptionComponent'
import ProductImageComponent from './ProductComponent/ProductImageComponent'

function HeroCardComponent(props) {
    return (
        <div className="card">
            <div className='imageDiv'>
                <ProductImageComponent image={props.image}></ProductImageComponent>
            </div>
            <div className="card-body text-center">
                <ProductNameComponent title={props.title}></ProductNameComponent>
                <ProductDescriptionComponent description={props.description}></ProductDescriptionComponent>
            </div>
        </div>
    )
}
export default HeroCardComponent;