export const cart_reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {

        return {
            ...state,
            cart_item: action.payload
        }
    }

    if (action.type === 'SHOW_CART') {
        return {
            ...state,
            isCart: true
        }
    }

    if (action.type === 'HIDE_CART') {
        return {
            ...state,
            isCart: false
        }
    }

    if (action.type === 'EMPTY_CART') {
        return {
            ...state,
            cart_item: {
                name: '',
                price: '',
                quantity: '',
                imageUrl: ''
            }
        }
    }
}