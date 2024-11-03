import React, { useState } from 'react'
import HeroCardComponent from './HeroCardComponent';

function HeroComponent() {

    const [products, setProducts] = useState([
        { id: 0, productName: 'Product 1', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
        { id: 1, productName: 'Product 2', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
        { id: 2, productName: 'Product 3', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
        { id: 3, productName: 'Product 4', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
    ]);

    const [inputValue, setInputValue] = useState('');

    function changeProductName(e) {
        setInputValue(e.target.value);
    };

    function updateProduct(id) {
        const productCopy = products

        productCopy[id].productName = inputValue

        setProducts(productCopy)
        console.log(productCopy)
    }

    return <>
        <div className="container my-5">
            <div className='row'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={changeProductName}
                    placeholder="Enter an item"
                    className="flex-grow p-2 border rounded-l mb-5"
                />

                {
                    products.map(product => {
                        return <div className='col-md-3' key={product.id}>
                            <HeroCardComponent productName={product.productName} productDescription={product.productDescription} productImage={product.productImage} />

                            <button className='btn btn-primary w-100' onClick={() => { updateProduct(product.id) }}>
                                Add to cart
                            </button>
                        </div>
                    }
                    )
                }
            </div>
        </div>
    </>
}
export default HeroComponent;