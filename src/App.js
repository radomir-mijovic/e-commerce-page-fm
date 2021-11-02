import {Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductsListPage from "./Components/Pages/ProductsListPage";
import ProductPage from "./Components/Pages/ProductPage";
import HomePage from "./Components/Pages/HomePage";
import ErrorPage from "./Components/Pages/ErrorPage";
import Cart from "./Components/Cart/Cart";
import {useCartContext} from "./Components/context/cart_context";
import {AnimatePresence} from "framer-motion";
import MenProductsPage from "./Components/Pages/MenProductsPage";
import WomanProductsPage from "./Components/Pages/WomanProductsPage";
import Gallery from "./Components/Gallery/Gallery";
import {useState} from "react";
import {useGalleryContext} from "./Components/context/gallery_context";

function App() {
    const {isCart} = useCartContext()
    const {isGallery} = useGalleryContext()


    return (
        <>
            {isGallery && <Gallery/>}
            <Navbar/>
            <AnimatePresence>
                {isCart && <Cart/>}
            </AnimatePresence>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/products' component={ProductsListPage}/>
                <Route exact path='/men' component={MenProductsPage}/>
                <Route exact path='/woman' component={WomanProductsPage}/>
                <Route exact path='/about' component={ProductsListPage}/>
                <Route exact path='/contact' component={ProductsListPage}/>
                <Route exact path='/product/:id' component={ProductPage}/>
                <Route path='*' component={ErrorPage}/>
            </Switch>
        </>
    );
}

export default App;
