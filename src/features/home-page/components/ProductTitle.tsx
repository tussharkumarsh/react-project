import { Link } from 'react-router-dom';
function ProductTitle(props) {
    return <h3 className="product-title"> <Link to={`/product-detail/${props.id}`}>{props.title}</Link></h3>;
}

export default ProductTitle;