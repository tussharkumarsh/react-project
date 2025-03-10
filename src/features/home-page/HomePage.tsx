import { useEffect, useState } from 'react';
import Product from './container/Product';
import { IProduct } from 'interfaces/product';
import httpClient from '../../core/http-client';
import { AxiosResponse } from 'axios';


const useProductManager = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const STORAGE_KEY = 'cachedProducts';
  const LAST_SYNC_KEY = 'lastProductSync';

  // Function to fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      return data;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Error fetching products: ${err.message}`);
      } else {
        throw new Error('Error fetching products');
      }
    }
  };

  // Function to get products from local storage
  const getStoredProducts = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  };

  // Function to store products in local storage
  const storeProducts = (products) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
  };

  // Function to check if we need to sync with the API
  const shouldSync = () => {
    const lastSync = localStorage.getItem(LAST_SYNC_KEY);
    if (!lastSync) return true;

    // Check if last sync was more than 1 minutes ago
    const oneMinutes = 1 * 60 * 1000;
    return new Date().getTime() - new Date(lastSync).getTime() > oneMinutes;
  };

  // Function to sync with API and update local storage if needed
  const syncWithAPI = async () => {
    try {
      const apiProducts = await fetchProducts();
      const storedProducts = getStoredProducts();

      if (!storedProducts || JSON.stringify(apiProducts) !== JSON.stringify(storedProducts)) {
        storeProducts(apiProducts);
        setProducts(apiProducts);
      }
    } catch (err) {
      console.error('Background sync failed:', err);
    }
  };

  // Initial load
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

        // First, try to get from local storage
        const storedProducts = getStoredProducts();

        if (storedProducts) {
          setProducts(storedProducts);
          setLoading(false);

          // If we need to sync, do it in the background
          if (shouldSync()) {
            syncWithAPI();
          }
        } else {
          // If nothing in storage, fetch from API
          const apiProducts = await fetchProducts();
          storeProducts(apiProducts);
          setProducts(apiProducts);
          setLoading(false);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Set up periodic background sync
  useEffect(() => {
    const syncInterval = setInterval(() => {
      if (shouldSync()) {
        syncWithAPI();
      }
    }, 300000); // Check every 5 minutes

    return () => clearInterval(syncInterval);
  }, []);

  return { products, loading, error };
};











function HomePage() {
  const { products, loading, error } = useProductManager();

  async function addProductToCart(product: IProduct) {
    const response: AxiosResponse = await httpClient.post('products', {
      userId: 5,
      date: '2020-02-03',
      products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
    });
    const data = await response.data;
    console.log(data);
  }

  if (loading) return <div className='container my-5'>
    <div className='text-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  </div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container my-5 product-list'>
      <div className='row'>
        {products.map((product) => {
          return (
            <div className='col-12 col-sm-6 col-md-3' key={product.id}>
              <Product product={product} addProductToCart={addProductToCart} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HomePage;
