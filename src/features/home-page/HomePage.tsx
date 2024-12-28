import { useEffect, useState } from 'react';
import Product from './container/Product';
import { IProduct } from 'interfaces/product';

function HomePage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getProductData() {
    try {
      setIsLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const ProductsData = await response.json();
      setProducts(ProductsData);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  function addProductToCart(product: IProduct) {
    console.log(product.title);
  }

  if (isLoading) {
    return (
      <div className='container my-5'>
        <div className='text-center'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='container my-5 product-list'>
      <div className='row'>
        {products.map((product) => {
          return (
            <div className='col-12 col-md-3' key={product.id}>
              <Product product={product} addProductToCart={addProductToCart} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
