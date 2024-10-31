import React from 'react'
import HeroCardComponent from './HeroCardComponent';

function HeroComponent() {

    const products = [
        { id: 1, productName: 'Product 1', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
        { id: 2, productName: 'Product 2', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
        { id: 3, productName: 'Product 3', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
        { id: 4, productName: 'Product 4', productDescription: 'Product description', productImage: "https://picsum.photos/id/30/1280/901" },
    ];

    return <>
        <div className="container my-5">
            <div className='row'>
                {
                    products.map(product => {
                        return <div className='col-md-3' key={product.id}>
                            <HeroCardComponent productName={product.productName} productDescription={product.productDescription} productImage={product.productImage} />
                        </div>
                    }
                    )
                }
            </div>
        </div>
    </>
}

export default HeroComponent;