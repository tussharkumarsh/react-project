import { useEffect, useState } from 'react';
import ProductsData from '../../mock-data/products.json';
import Product from './container/Product';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API call code
    setTimeout(() => {
      setProducts(ProductsData);
    }, 5000);
  });

  function addProductToCart(product) {
    console.log(product.title);
  }

  return (
    <div>
      <div className='herocomponent'>Hero Component</div>
      <div className='container my-5 product-list'>
        <div className='row'>
          {products.map((product) => {
            return <div className='col-md-3' key={product.id}>
              <Product  product={product} addProductToCart={addProductToCart} />
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
