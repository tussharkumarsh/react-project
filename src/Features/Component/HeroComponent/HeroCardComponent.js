import React from 'react'
import ProductNameComponent from '../ProductComponent/ProductNameComponent'
import ProductDescriptionComponent from '../ProductComponent/ProductDescriptionComponent'
import ProductImageComponent from '../ProductComponent/ProductImageComponent'
import ProductPriceComponent from '../ProductComponent/ProductPriceComponent'
import ProductRatingComponent from '../ProductComponent/ProductRatingComponent'
import ProductReviewComponent from '../ProductComponent/ProductReviewComponent'
import ProductAddCartComponent from '../ProductComponent/ProductAddCartButtonComponent'
import './HeroComponet.scss';

function HeroCardComponent(props) {
    return (
        <div className="product-card">
            <div className="product-image">
                <ProductImageComponent image={props.image}></ProductImageComponent>
            </div>
            <div className="product-content">
                <ProductNameComponent title={props.title}></ProductNameComponent>
                <ProductDescriptionComponent description={props.description}></ProductDescriptionComponent>
                <ProductPriceComponent price={props.price}></ProductPriceComponent>
                <div className="product-rating">
                    <ProductRatingComponent rating={props.rating}></ProductRatingComponent>
                    <ProductReviewComponent review={props.review}></ProductReviewComponent>
                </div>
                <div className='mt-3'>
                    <ProductAddCartComponent product={props}></ProductAddCartComponent>
                </div>
            </div>
        </div>
    )
}
export default HeroCardComponent;