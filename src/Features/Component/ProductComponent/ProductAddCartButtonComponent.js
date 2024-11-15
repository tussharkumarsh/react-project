import React, { useState } from "react";

function ProductAddCartComponent(props) {
    const [cart, setCart] = useState([]);
    const addToCart = (props) => {
        setCart([...cart, props]);
        console.log("cart", cart)
    };

    return <button className='btn btn-primary w-100' onClick={() => addToCart(props)}>Add to Cart</button>
}

export default ProductAddCartComponent;