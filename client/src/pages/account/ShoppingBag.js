import { useEffect } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';

import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_SHOPPING_BAG, ADD_MULTIPLE_TO_SHOPPING_BAG } from '../../utils/actions';
import Auth from '../../utils/auth';

import ShoppingBagItemCard from '../../components/Product/ShoppingBagItemCard';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const ShoppingBag = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getShoppingBag () {
            const shoppingBag = await idbPromise('shoppingBag', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_SHOPPING_BAG, products: [...shoppingBag] });
        }

        if (!state.shoppingBag.length) {
            getShoppingBag();
        }
    }, [state.shoppingBag.length, dispatch]);

    function toggleShoppingBag () {
        dispatch({ type: TOGGLE_SHOPPING_BAG });
    }

    function calculateTotal () {
        let sum = 0;
        state.shoppingBag.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout () {
        const productIds = [];

        state.shoppingBag.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds },
        });
    }

    if (!state.shoppingBagOpen) {
        return (
            <div className="shoppingBag-closed" onClick={toggleShoppingBag}>
                <span role="img" aria-label="trash">
                    🛒
                </span>
            </div>
        );
    }

    return (
        <div className="shoppingBag">
            <div className="close" onClick={toggleShoppingBag}>
                [close]
            </div>
            <h2>Shopping ShoppingBag</h2>
            {state.shoppingBag.length ? (
                <div>
                    {state.shoppingBag.map((item) => (
                        <ShoppingBagItemCard key={item._id} item={item} />
                    ))}

                    <div className="flex-row space-between">
                        <strong>Total: ${calculateTotal()}</strong>

                        {Auth.loggedIn() ? (
                            <button onClick={submitCheckout}>Checkout</button>
                        ) : (
                            <span>(log in to check out)</span>
                        )}
                    </div>
                </div>
            ) : (
                <h3>
                    <span role="img" aria-label="shocked">
                        😱
                    </span>
                    You haven't added anything to your shoppingBag yet!
                </h3>
            )}
        </div>
    );
};

export default ShoppingBag;