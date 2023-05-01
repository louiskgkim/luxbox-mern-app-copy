import { useReducer } from "react";
import {
    UPDATE_PRODUCTS,
    ADD_TO_SHOPPING_BAG,
    UPDATE_SHOPPING_BAG_QUANTITY,
    REMOVE_FROM_SHOPPING_BAG,
    ADD_MULTIPLE_TO_SHOPPING_BAG,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_DESIGNERS,
    UPDATE_CURRENT_DESIGNER,
    UPDATE_COLORS,
    UPDATE_CURRENT_COLOR,
    CLEAR_SHOPPING_BAG,
    TOGGLE_SHOPPING_BAG
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        case ADD_TO_SHOPPING_BAG:
            return {
                ...state,
                shoppingBagOpen: true,
                shoppingBag: [...state.shoppingBag, action.product],
            };

        case ADD_MULTIPLE_TO_SHOPPING_BAG:
            return {
                ...state,
                shoppingBag: [...state.shoppingBag, ...action.products],
            };

        case UPDATE_SHOPPING_BAG_QUANTITY:
            return {
                ...state,
                shoppingBagOpen: true,
                shoppingBag: state.shoppingBag.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity
                    }
                    return product
                })
            };

        case REMOVE_FROM_SHOPPING_BAG:
            let newState = state.shoppingBag.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                shoppingBagOpen: newState.length > 0,
                shoppingBag: newState
            };

        case CLEAR_SHOPPING_BAG:
            return {
                ...state,
                shoppingBagOpen: false,
                shoppingBag: []
            };

        case TOGGLE_SHOPPING_BAG:
            return {
                ...state,
                shoppingBagOpen: !state.shoppingBagOpen
            };

        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }

        case UPDATE_DESIGNERS:
            return {
                ...state,
                designers: [...action.designers],
            };

        case UPDATE_CURRENT_DESIGNER:
            return {
                ...state,
                currentDesigner: action.currentDesigner
            }

        case UPDATE_COLORS:
            return {
                ...state,
                colors: [...action.colors],
            };

        case UPDATE_CURRENT_COLOR:
            return {
                ...state,
                currentColor: action.currentColor
            }

        default:
            return state;
    }
};

export function useProductReducer (initialState) {
    return useReducer(reducer, initialState)
}