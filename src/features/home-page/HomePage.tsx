import { useEffect, useState } from 'react';
import Product from './container/Product';
import { IProduct } from 'interfaces/product';

function HomePage() {
  const [products, setProducts] = useState<IProduct[]>([]);

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

  function addProductToCart(product: IProduct) {
    console.log(product.title);
  }

  return (
    <div>
      <div className='herocomponent'>Hero Component</div>
      <div className='container my-5 product-list'>
        <div className='row'>
          {products.map((product) => {
            return <div className='col-12 col-md-3' key={product.id}>
              <Product product={product} addProductToCart={addProductToCart} />
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
