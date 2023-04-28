import { Link } from 'react-router-dom';

import { formatCurrency } from '../../utils/formatters';

const ProductCard = (props) => {
    return (
        <Link to={`/shop/product/${props.image}`} className="link" state={{ product: props }}>
            <div className="product-card-column">
                <div className="product-card">
                    <div className="product-card-header">
                        <img src={require(`../../assets/img/products/${props.category}/${props.image}.png`)} alt={props.name} />
                    </div>
                    <div className="product-card-body">
                        <p className="product-card-designer">
                            {props.designer}
                        </p>
                        <p className="product-card-name">
                            {props.name}
                        </p>
                        <p className="product-card-price">
                            {formatCurrency(props.price)}
                        </p>
                    </div>
                </div>
            </div >
        </Link >
    )
};

export default ProductCard;