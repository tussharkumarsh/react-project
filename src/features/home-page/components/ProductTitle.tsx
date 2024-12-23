import { Link } from 'react-router-dom';

function ProductTitle(props) {
    return <h3 className="product-title">
        {props.title}
        <Link to={`/product-detail/${props.id}`}>View Details</Link>
    </h3>;

}
export default ProductTitle;