import { useLocation, Link } from 'react-router-dom';

import { formatCurrency } from '../../utils/helpers';

const ProductDetail = (props) => {
    const location = useLocation();
    const { product } = location.state;
    return (
        <section className="main-content-container">
            <div className="product-detail-wrapper">
                <div className="product-detail-image">
                    <img src={require(`../../assets/img/products/${product.category}/${product.image}.png`)} alt={product.name} />
                </div >
                <div className="product-detail-info">
                    <h3>{product.designer}</h3>
                    <p className="product-detail-name">{product.name}</p>
                    <p className="product-detail-price">
                        {product.onSale === true
                            ? (
                                <div className="sale-price-wrapper">
                                    <span className="original-price">{formatCurrency(product.price)}</span>
                                    <span className="sale-price">{formatCurrency(product.salePrice)}</span>
                                </div>
                            )
                            : formatCurrency(product.price)
                        }

                    </p>
                    <p className="product-detail-color">Color: {product.color}</p>
                    <div className="product-detail-button-wrapper">
                        <button className="filled-btn">
                            Add to Bag
                        </button>
                        <button className="outlined-btn" >
                            Add to Wish List
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ProductDetail;