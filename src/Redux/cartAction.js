import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"


export const addToCart = itemObj => {

    return {
        type: ADD_TO_CART,
        payLoad: itemObj
    }
}

export const removeFromCart = itemId => {
    return {
        type: REMOVE_FROM_CART,
        payLoad: itemId
    }
}