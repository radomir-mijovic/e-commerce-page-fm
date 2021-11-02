import React, {useEffect} from 'react';
import {Container} from "../Container";
import ProductsList from "../ProductsList";
import {useProductsContext} from "../context/products_context";
import Loading from "../Loading/Loading";
import SomethingWentWrong from "../Error/SomethingWentWrong";

const MenProductsPage = () => {
    const {menProducts, isLoading, isError} = useProductsContext()

    useEffect(() => {
        menProducts()
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

export default MenProductsPage;