function ProductRating(props) {
    const { rate, count } = props.rating;
    const fullStars = Math.floor(rate); // Number of full stars
    const halfStar = rate % 1 >= 0.5 ? 1 : 0; // Check if a half star is needed
    const emptyStars = 5 - fullStars - halfStar; // Remaining stars are empty

    const stars = (
        <>
            {'★'.repeat(fullStars)}
            {halfStar ? <span className="h1">★</span> : ''}
            <span className="h2">
                {'★'.repeat(emptyStars)}
            </span>
        </>
    );

    return (
        <>
            <div className="rating">
                <span className="rate">{rate.toFixed(1)}</span>
            </div>
            <div className="based-on">
                <div className="stars" style={{ fontSize: '1.5rem', color: '#f39c12' }}>
                    {stars}
                </div>
                <div className="based-on-text">based on {count} ratings</div>
            </div>
        </>
    );
}

export default ProductRating;
