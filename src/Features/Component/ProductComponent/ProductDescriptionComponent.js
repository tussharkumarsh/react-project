import React from 'react'
function ProductDescriptionComponent(props){
    return  <p className="card-text product-description">{props.description}</p>
}
export default ProductDescriptionComponent;