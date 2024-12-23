import { IProduct } from 'interfaces/product';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
            <div>
                <h1>Product not found</h1>
                <button onClick={() => navigate('/')}>Back to Products</button>
            </div>
        );
    }

    return (
        <div className='container my-5 product-detail'>
            <h1>
                Product Detail
            </h1>
            <div className='row'>
                <div className='col-12 col-md-6 center-img product-img-container'>
                    <img className='product-img' src={product.image} alt={product.title} />
                </div>
                <div className='col-12 col-md-6'>
                    <p className='product-detail-category'>Product Category: <b> {product.category}</b></p>
                    <h2 className='product-detail-title'>{product.title}</h2>
                    <p><span className='product-detail-price'> ${product.price}</span> (Inclusive of GST)</p>
                    <p>{product.description}</p>

                    <div className='product-detail-rating'>
                        <div>
                            <span className='rate'>{product.rating.rate}</span>
                        </div>
                        <div className='based-on'>
                            <div>★★★★★</div>
                            <div className='based-on-text' >based on {product.rating.count} ratings</div>
                        </div>
                    </div>

                    <button className='btn btn-primary' onClick={() => navigate('/')}>Back to Products</button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;