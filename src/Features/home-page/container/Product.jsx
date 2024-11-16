import React from 'react';
import Button from '../../../components/button/Button';
// import ProductNameComponent from '../ProductComponent/ProductNameComponent';
// import ProductDescriptionComponent from '../ProductComponent/ProductDescriptionComponent';
// import ProductImageComponent from '../ProductComponent/ProductImageComponent';
// import ProductPriceComponent from '../ProductComponent/ProductPriceComponent';
// import ProductRatingComponent from '../ProductComponent/ProductRatingComponent';
// import ProductReviewComponent from '../ProductComponent/ProductReviewComponent';
// import ProductAddCartComponent from '../ProductComponent/ProductAddCartButtonComponent';
// import './HeroComponet.scss';

// props = {key: , product, addProductToCart};

// function Product(props) {
function Product({ product, addProductToCart }) {
  return (
    <div className='product-card'>
      {/* <div className="product-image">
                <ProductImageComponent image={product.image}></ProductImageComponent>
            </div>
            <div className="product-content">
                <ProductNameComponent title={product.title}></ProductNameComponent>
                <ProductDescriptionComponent description={product.description}></ProductDescriptionComponent>
                <ProductPriceComponent price={product.price}></ProductPriceComponent>
                <div className="product-rating">
                    <ProductRatingComponent rating={product.rating}></ProductRatingComponent>
                    <ProductReviewComponent review={product.review}></ProductReviewComponent>
                </div>
                <div className='mt-3'>
                    <ProductAddCartComponent product={product} addProductToCart={addProductToCart}></ProductAddCartComponent>
                </div>
            </div> */}

      <Button
        onBtnClick={() => {
          addProductToCart(product.id);
        }}
        text={`Test product ${product.id}`}
      />
    </div>
  );
}
export default Product;
