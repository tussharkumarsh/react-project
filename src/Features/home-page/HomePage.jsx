import { useEffect, useState } from 'react';
import Product from './container/Product';

function HomePage() {
  const [products, setProducts] = useState([]);

  async function getProductData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const ProductsData = await response.json();
      console.log("data", ProductsData);
      setProducts(ProductsData);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  // useEffect(() => {
  //   testApiError();
  // }, []);

  // async function testApiError() {
  //   // asdfsd.ahdidh = 123;
  //   try {
  //     asdfsd.ahdidh = 123;
  //   } catch (e) {
  //     console.log('errrrrrr', e);
  //   }
  // }

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
              <Product product={product} addProductToCart={addProductToCart} />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
