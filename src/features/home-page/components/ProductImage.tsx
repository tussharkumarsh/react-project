import React from "react";
function ProductImage(props) {
    return <img src={props.image} className="card-img-top" alt="Card Thumbnail" />;
}
export default ProductImage;