import React from 'react';
import Button from '../../../components/button/Button';
import ProductImage from '../components/ProductImage';
import ProductTitle from '../components/ProductTitle';
import ProductDescription from '../components/ProductDescription';
import ProductPrice from '../components/ProductPrice';
import ProductRating from '../components/ProductRating';
import ProductRatingCount from '../components/ProductRatingCount';

// import './HeroComponet.scss';

// props = {key: , product, addProductToCart};

// function Product(props) {
function Product({ product, addProductToCart }) {
  return (
    <div className='product-card'>
      <div className="product-image">
        <ProductImage image={product.image} />
      </div>
      <div className="product-content">
        <ProductTitle title={product.title} />
        <ProductDescription description={product.description} />
        <ProductPrice price={product.price} />
        <div className="product-rating">
          <ProductRating rating={product.rating} />
          <ProductRatingCount rating={product.rating} />
        </div>
        <div className='mt-3'>
          <Button onBtnClick={() => {
            addProductToCart(product);
          }}
            // text={`Test product ${product.id}`}
            text={`Add to Cart`}
          />
        </div>
      </div>
    </div>
  )
}
export default Product;
