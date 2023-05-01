import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';

import {
    ADD_TO_SHOPPING_BAG,
    ADD_TO_WISHLIST
} from '../../utils/actions';
import { formatCurrency, idbPromise } from '../../utils/helpers';

const ProductDetail = (props) => {
    const location = useLocation();
    const { product } = location.state;

    const { data } = useQuery(QUERY_USER);

    const user = data?.user || {};

    console.log(user);

    const addToWishlist = () => {

    }


    const addToShoppingBag = () => {
        //     const itemInCart = cart.find((cartItem) => cartItem._id === id);
        //     if (itemInCart) {
        //         dispatch({
        //             type: UPDATE_CART_QUANTITY,
        //             _id: id,
        //             purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        //         });
        //         idbPromise('cart', 'put', {
        //             ...itemInCart,
        //             purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        //         });
        //     } else {
        //         dispatch({
        //             type: ADD_TO_CART,
        //             product: { ...currentProduct, purchaseQuantity: 1 },
        //         });
        //         idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        //     }
        // };

        // const removeFromShoppingBag = () => {
        //     dispatch({
        //         type: REMOVE_FROM_CART,
        //         _id: currentProduct._id,
        //     });

        //     idbPromise('cart', 'delete', { ...currentProduct });
    };

    return (
        <section className="main-content-container">
            <div className="product-detail-wrapper">
                <div className="product-detail-image">
                    <img src={require(`../../assets/img/products/${product.category}/${product.image}.png`)} alt={product.name} />
                </div >
                <div className="product-detail-info">
                    <h3>{product.designer}</h3>
                    <p className="product-detail-name">{product.name}</p>
                    <div className="product-detail-price">
                        {product.onSale === true
                            ? (
                                <div className="sale-price-wrapper">
                                    <span className="original-price">{formatCurrency(product.price)}</span>
                                    <span className="sale-price">{formatCurrency(product.salePrice)}</span>
                                </div>
                            )
                            : formatCurrency(product.price)
                        }

                    </div>
                    <p className="product-detail-color">Color: {product.color}</p>
                    <div className="product-detail-button-wrapper">
                        <button className="filled-btn" onClick={addToShoppingBag}>
                            Add to Bag
                        </button>
                        <button className="outlined-btn" onClick={addToWishlist}>
                            Add to Wish List
                        </button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ProductDetail;