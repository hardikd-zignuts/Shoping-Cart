import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes"

const initialData = {
    cartSize: 0,
    cartData: [
        // {
        //     id: 'p1',
        //     itemQuantity: 10,
        //     itemPrice: 60,
        //     itemBasePrice: 6,
        //     itemTitle: "Man Perfume",
        // }
    ]
}

const checkItem = (itemObj, state) => {
    let filterArr = state.cartData.filter((item) => item.id === itemObj.id)
    if (filterArr.length === 0) {
        return false
    } else {
        return true
    }
}

const increaseQuantity = (STATE, PAYLOAD, PROPERTY) => {
    let arr = [...STATE.cartData]
    let foundIndex = arr.findIndex(item => item.id === PAYLOAD.id);
    arr[foundIndex][PROPERTY]++;
    return arr;
}

const decreaseQuantity = (STATE, PAYLOAD, PROPERTY) => {
    let arr = [...STATE.cartData]
    let foundIndex = arr.findIndex(item => item.id === PAYLOAD.id);
    arr[foundIndex][PROPERTY]--;
    if (arr[foundIndex][PROPERTY] === 0) {
        arr.splice(foundIndex, 1)
    }
    return arr;
}

const cartReducer = (state = initialData, action) => {
    let tempArr;

    switch (action.type) {
        case ADD_TO_CART:
            if (checkItem(action.payLoad, state)) {
                tempArr = increaseQuantity(state, action.payLoad, 'itemQuantity')
            } else {
                tempArr = [action.payLoad, ...state.cartData]
            }
            return {
                ...state,
                cartSize: state.cartSize + 1,
                cartData: tempArr
            }

        case REMOVE_FROM_CART:

            if (checkItem(action.payLoad, state)) {
                //decrease property
                tempArr = decreaseQuantity(state, action.payLoad, 'itemQuantity')
            } else {
                // tempArr = [action.payLoad, ...state.cartData]
                tempArr = [...state]
            }

            return {
                ...state,
                cartSize: state.cartSize - 1,
                cartData: tempArr
            }
        default:
            return state
    }
}

export default cartReducer