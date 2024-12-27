import { IProduct } from 'interfaces/product';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductImage from './components/ProductImage';
import ProductCategory from './components/ProductCategory';
import ProductTitle from './components/ProductTitle';
import ProductPrice from './components/ProductPrice';
import ProductDescription from './components/ProductDescripion';
import ProductRating from './components/ProductRating';
import Button from 'components/button/Button';

const ProductDetail = () => {
    const { id } = useParams<{ id: string; }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<IProduct | null>(null);
    async function getProductDetail() {
        try {
            const response = await fetch("https://fakestoreapi.com/products/" + id);
            const productData = await response.json();
            setProduct(productData);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProductDetail();
    }, []);

    if (!product) {
        return (
            <div className='justify-center my-5'>

                <img src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg?resize=300x275&vertical=center" alt="no product found" />
                <br /> <br />
                <Button onBtnClick={() => { backtoHome(); }} text={`Back to Product List`} />
            </div>
        );
    }

    function backtoHome() {
        navigate('/');
    }

    return (
        <div className='container my-5 product-detail'>
            <h1>
                Product Detail
            </h1>
            <div className='row'>
                <div className='col-12 col-md-6 center-img product-img-container'>
                    <ProductImage image={product.image} title={product.title} />
                </div>
                <div className='col-12 col-md-6'>
                    <ProductCategory category={product.category} />
                    <ProductTitle title={product.title} />
                    <ProductPrice price={product.price} />
                    <ProductDescription description={product.description} />
                    <div className='product-detail-rating'>
                        <ProductRating rating={product.rating} />
                    </div>
                    <Button onBtnClick={() => { backtoHome(); }} text={`Back to Product List`} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;