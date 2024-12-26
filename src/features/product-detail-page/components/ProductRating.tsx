function ProductRating(props) {

    return <>
        <div>
            <span className='rate'>{props.rating.rate}</span>
        </div>
        <div className='based-on'>
            <div>★★★★★</div>
            <div className='based-on-text' >based on {props.rating.count} ratings</div>
        </div>
    </>;

}
export default ProductRating; 