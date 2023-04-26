const ProductCard = (props) => {
    return (
        <div className="product-card-column">
            <div className="product-card">
                <div className="product-card-image">
                    {props.image}
                </div>
                <p className="product-card-brand">
                    {props.brand}
                </p>
                <p className="product-card-name">
                    {props.name}
                </p>
                <p className="product-card-price">
                    ${props.price}
                </p>
            </div>
        </div >
    )
};

export default ProductCard;