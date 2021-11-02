import React, {useContext, useReducer} from "react";
import {products_reducer} from "../reducer/products_reducer";
import axios from "axios";

const productsUrl = 'https://e-commerce-page-fm.herokuapp.com/api/products/'
const singleProductUrl = 'https://e-commerce-page-fm.herokuapp.com/api/product-images/'
const mensProductsUrl = 'https://e-commerce-page-fm.herokuapp.com/api/men-products/'
const womanProductsUrl = 'https://e-commerce-page-fm.herokuapp.com/api/women-products/'

const initialValues = {
    products: [],
    filteredProducts: [],
    product: {
        id: '',
        name: '',
        description: '',
        price: '',
        discount: '',
        company: '',
        product_images: []
    },
    isLoading: false,
    isError: false
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(products_reducer, initialValues)

    const fetchProducts = async () => {
        try {
            dispatch({
                type: 'IS_LOADING'
            })
            const response = await axios.get(productsUrl)
            dispatch({
                type: 'LOAD_PRODUCTS',
                payload: response.data
            })

        } catch (error) {
            dispatch({
                type: 'IS_ERROR'
            })
        }
    }

    const fetchSingeProduct = async (id) => {
        try {
            dispatch({
                type: 'IS_LOADING'
            })
            const response = await axios.get(`${singleProductUrl}${id}/`)
            dispatch({
                type: 'LOAD_SINGLE_PRODUCT',
                payload: response.data
            })

        } catch (error) {
            dispatch({
                type: 'IS_ERROR'
            })
        }
    }

    const filterProducts = (e) => {
        const filteredProducts = e.target.value

        dispatch({
            type: 'FILTER_PRODUCTS',
            payload: filteredProducts
        })
    }

    const menProducts = async () => {
        try {
            const response = await axios.get(mensProductsUrl)
            dispatch({
                type: 'MEN_PRODUCTS',
                payload: response.data
            })

        } catch (error) {
            dispatch({
                type: 'IS_ERROR'
            })
        }
    }

    const womanProducts = async () => {
        try {
            const response = await axios.get(womanProductsUrl)
            dispatch({
                type: 'WOMAN_PRODUCTS',
                payload: response.data
            })
        }

        catch (error) {
            dispatch({
                type: 'IS_ERROR'
            })
        }
    }


    return (
        <ProductsContext.Provider
            value={{
                ...state,
                fetchProducts,
                fetchSingeProduct,
                filterProducts,
                menProducts,
                womanProducts
            }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)