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

  function addProductToCart(id) {
    console.log(id);
  }

  return (
    <div>
      <div className='herocomponent'>Hero Component</div>
      <div className='product-list'>
        {products.map((product) => {
          return <Product key={product.id} product={product} addProductToCart={addProductToCart} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
