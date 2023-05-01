import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../../../utils/queries';
import { useStoreContext } from '../../../utils/GlobalState';

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_DESIGNERS,
    UPDATE_CURRENT_DESIGNER,
    UPDATE_COLORS,
    UPDATE_CURRENT_COLOR,
    ADD_TO_SHOPPING_BAG,
    ADD_TO_WISHLIST
} from '../../../utils/actions';
import {
    QUERY_PRODUCTS,
    QUERY_CATEGORIES,
    QUERY_DESIGNERS,
    QUERY_COLORS,
} from '../../../utils/queries';
import { formatCurrency, idbPromise } from '../../../utils/helpers';

const ProductDetail = (props) => {

    const { designerParam, categoryParam, nameParam } = useParams();

    const [state, dispatch] = useStoreContext();

    const { products, shoppingBag } = state;

    const { loading, data: productData } = useQuery(QUERY_PRODUCTS);
    const { data: designerData } = useQuery(QUERY_DESIGNERS);
    const { data: categoryData } = useQuery(QUERY_CATEGORIES);
    const { data: colorData } = useQuery(QUERY_COLORS);


    useEffect(() => {
        if (productData) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: productData.products,
            });
            productData.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            idbPromise('products', 'get').then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        }
    }, [productData, loading, dispatch]);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
                idbPromise('categories', 'put', category);

                if (category.name === categoryParam) {
                    dispatch({
                        type: UPDATE_CURRENT_CATEGORY,
                        currentCategory: category._id,
                    });
                }
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then((categories) => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories,
                });
            });
        }
    }, [categoryData, loading, dispatch, categoryParam]);

    useEffect(() => {
        if (designerData) {
            dispatch({
                type: UPDATE_DESIGNERS,
                designers: designerData.designers,
            });
            designerData.designers.forEach((designer) => {
                idbPromise('designers', 'put', designer);

                if (designer.name === designerParam) {
                    dispatch({
                        type: UPDATE_CURRENT_CATEGORY,
                        currentCategory: designer._id,
                    });
                }
            });
        } else if (!loading) {
            idbPromise('designers', 'get').then((designers) => {
                dispatch({
                    type: UPDATE_DESIGNERS,
                    designers: designers,
                });
            });
        }
    }, [designerData, loading, dispatch, designerParam]);

    useEffect(() => {
        if (colorData) {
            dispatch({
                type: UPDATE_COLORS,
                colors: colorData.colors,
            });
            colorData.colors.forEach((color) => {
                idbPromise('colors', 'put', color);
            });
        } else if (!loading) {
            idbPromise('colors', 'get').then((colors) => {
                dispatch({
                    type: UPDATE_COLORS,
                    colors: colors,
                });
            });
        }
    }, [colorData, loading, dispatch]);

    const singleProduct = () => {
        for (let i = 0; i < state.products.length; i++) {
            const currentProduct = state.products[i];
            if (
                currentProduct.designer.name === designerParam &&
                currentProduct.category.name === categoryParam &&
                currentProduct.name === nameParam
            ) {
                console.log(currentProduct);
                return currentProduct;
            }
        }
        return;
    }

    function addToWishlist () {
    }

    const addToShoppingBag = () => {
        // const itemInShoppingBag = shoppingBag.find((shoppingBagItem) => shoppingBagItem._id === id);
        // if (itemInShoppingBag) {
        //     dispatch({
        //         type: UPDATE_CART_QUANTITY,
        //         _id: id,
        //         purchaseQuantity: parseInt(itemInShoppingBag.purchaseQuantity) + 1,
        //     });
        //     idbPromise('shoppingBag', 'put', {
        //         ...itemInShoppingBag,
        //         purchaseQuantity: parseInt(itemInShoppingBag.purchaseQuantity) + 1,
        //     });
        // } else {
        //     dispatch({
        //         type: ADD_TO_CART,
        //         product: { ...currentProduct, purchaseQuantity: 1 },
        //     });
        //     idbPromise('shoppingBag', 'put', { ...currentProduct, purchaseQuantity: 1 });
        // }
    };

    // const removeFromShoppingBag = () => {
    //     dispatch({
    //         type: REMOVE_FROM_CART,
    //         _id: currentProduct._id,
    //     });

    //     idbPromise('shoppingBag', 'delete', { ...currentProduct });

    const getSalePrice = (price) => {
        return (Math.ceil(price * 0.8));
    };

    return (
        <section className="main-content-container">
            {singleProduct() !== undefined && (
                <div className="product-detail-wrapper">
                    <div className="product-detail-image">
                        <img src={require(`../../../assets/img/products/${singleProduct().category.name}/${singleProduct().image}.png`)} alt={singleProduct().name} />
                    </div >
                    <div className="product-detail-info">
                        <h3>{singleProduct().designer.name}</h3>
                        <p className="product-detail-name">{singleProduct().name}</p>
                        <div className="product-detail-price">
                            {singleProduct().onSale === true
                                ? (
                                    <div className="sale-price-wrapper">
                                        <span className="original-price">{formatCurrency(singleProduct().price)}</span>
                                        <span className="sale-price">{formatCurrency(getSalePrice(singleProduct().price))}</span>
                                    </div>
                                )
                                : formatCurrency(singleProduct().price)
                            }

                        </div>
                        <p className="product-detail-color">Color: {singleProduct().color.name}</p>
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
            )}
        </section >
    );
};

export default ProductDetail;