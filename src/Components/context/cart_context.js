import React, {useContext, useReducer} from "react";
import {cart_reducer} from "../reducer/cart_reducer";

const initialValues = {
    cart_item: {
        name: '',
        price: '',
        quantity: '',
        imageUrl: ''
    },
    isCart: false
}


const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cart_reducer, initialValues)

    const addToCart = (name, priceOnDiscount, qnt, imageUrl) => {
        const {images} = imageUrl

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                name,
                price: priceOnDiscount,
                quantity: qnt,
                imageUrl: images
            }
        })
    }
    
    const emptyCart = () => {
      dispatch({
          type: 'EMPTY_CART'
      })
    }

    const showCart = () => {
        dispatch({
            type: 'SHOW_CART'
        })
    }

    const hideCart = () => {
        dispatch({
            type: 'HIDE_CART'
        })
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            showCart,
            hideCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)
