function ProductImage(props) {
    return (
        <img className='product-img' src={props.image} alt={props.title} />
    );
}
export default ProductImage;