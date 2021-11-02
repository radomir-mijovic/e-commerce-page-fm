export const products_reducer = (state, action) => {
    if (action.type === 'LOAD_PRODUCTS') {

        return {
            ...state,
            products: action.payload,
            filteredProducts: action.payload,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === 'LOAD_SINGLE_PRODUCT') {
        const {name, description, price, discount, company, images} = action.payload

        return {
            ...state,
            product: {
                name,
                description,
                price,
                discount,
                company,
                product_images: images
            },
            isLoading: false,
            isError: false
        }
    }

    if (action.type === 'FILTER_PRODUCTS') {
        return {
            ...state,
            filteredProducts: state.products.filter(
                item => item.name.toLowerCase().includes(action.payload)
            )
        }
    }

    if (action.type === 'MEN_PRODUCTS') {
        return {
            ...state,
            products: action.payload,
            filteredProducts: action.payload,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === 'WOMAN_PRODUCTS') {
        return {
            ...state,
            products: action.payload,
            filteredProducts: action.payload,
            isLoading: false,
            isError: false
        }
    }

    if (action.type === 'IS_ERROR') {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }

    if (action.type === 'IS_LOADING') {
        return {
            ...state,
            isLoading: true,
            isError: false
        }
    }
}