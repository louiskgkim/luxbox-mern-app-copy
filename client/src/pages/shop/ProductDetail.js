import { useLocation, Link } from 'react-router-dom';

const ProductDetail = (props) => {
    const location = useLocation();
    const { product } = location.state;
    return (
        <section className="main-content-wrapper">
            <div className="product-detail-wrapper">
                <div className="product-detail-image">
                    <img src={require(`../../assets/img/products/${product.category}/${product.image}.png`)} alt={product.name} />
                </div >
                <div className="product-detail-info">
                    <h3>{product.designer}</h3>
                    <p className="product-detail-name">{product.name}</p>
                    <p className="product-detail-price">${product.price}</p>
                    <p className="product-detail-color">Color: {product.color}</p>
                    <div className="product-detail-btns">
                        <button
                            className="product-detail-add-to-bag-btn"
                        >
                            Add to Bag
                        </button>
                        <button
                            className="product-detail-add-to-wishlist-btn"
                        >
                            Add to Wish List
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ProductDetail;