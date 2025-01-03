import { useEffect, useState } from 'react';
import Product from './container/Product';
import { IProduct } from 'interfaces/product';
import httpClient from '../../core/http-client';
import { AxiosResponse } from 'axios';

function HomePage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getProductData() {
    try {
      setIsLoading(true);
      const response: AxiosResponse = await httpClient.get('products');
      const data = await response.data;
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  async function addProductToCart(product: IProduct) {
    const response: AxiosResponse = await httpClient.post('products', {
      userId: 5,
      date: '2020-02-03',
      products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
    });
    const data = await response.data;
    console.log(data);
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
            <div className='col-12 col-sm-6 col-md-4' key={product.id}>
              <Product product={product} addProductToCart={addProductToCart} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
