import React, {useEffect} from 'react';
import {useProductsContext} from "../context/products_context";
import ProductsList from "../ProductsList";
import {Container} from "../Container";
import SomethingWentWrong from "../Error/SomethingWentWrong";
import Loading from "../Loading/Loading";

const ProductsListPage = () => {
    const {fetchProducts, isError, isLoading} = useProductsContext()

    useEffect(() => {
        fetchProducts()
    }, [])

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    if (isError) {
        return (
            <SomethingWentWrong/>
        )
    }

    return (
        <Container>
            <ProductsList/>
        </Container>
    );
};


export default ProductsListPage;