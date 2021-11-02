import React, {useEffect} from 'react';
import {Container} from "../Container";
import ProductsList from "../ProductsList";
import {useProductsContext} from "../context/products_context";
import Loading from "../Loading/Loading";
import SomethingWentWrong from "../Error/SomethingWentWrong";

const WomanProductsPage = () => {
    const {womanProducts, isLoading, isError} = useProductsContext()

    useEffect(() => {
        womanProducts()
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

export default WomanProductsPage;