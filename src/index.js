import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {NavbarProvider} from "./Components/context/navbar_context";
import {ProductsProvider} from "./Components/context/products_context";
import {CartProvider} from "./Components/context/cart_context";
import {GalleryProvider} from "./Components/context/gallery_context";

const theme = {
    mobile: '',
    colors: {
        grey: '#797C81'
    }
}


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ProductsProvider>
                <CartProvider>
                    <GalleryProvider>
                        <NavbarProvider>
                            <Router>
                                <App/>
                            </Router>
                        </NavbarProvider>
                    </GalleryProvider>
                </CartProvider>
            </ProductsProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

