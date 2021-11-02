import React, {useEffect, useState} from 'react';
import GalleryMobile from "../Gallery/GalleryMobile";
import {useProductsContext} from "../context/products_context";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import ProductText from "../ProductText";
import {Container} from "../Container";
import cartIcon from "../../assets/icons/icon-cart.svg";
import minusIcon from "../../assets/icons/icon-minus.svg";
import plusIcon from "../../assets/icons/icon-plus.svg";
import {useCartContext} from "../context/cart_context";
import {motion} from "framer-motion";
import SomethingWentWrong from "../Error/SomethingWentWrong";
import Loading from "../Loading/Loading";

const ProductPage = () => {
    const {product, fetchSingeProduct, isError, isLoading} = useProductsContext()
    const {id} = useParams()
    const {addToCart} = useCartContext()

    const {name, price, discount, product_images} = product;
    const imageUrl = product_images[0]

    const [qnt, setQnt] = useState(1)

    const addQnt = () => {
        if (qnt === 5) {
            return
        }
        setQnt(prevState => prevState + 1)
    }

    const subtractQnt = () => {
        if (qnt === 1) {
            return
        }
        setQnt(prevState => prevState - 1)
    }

    const discountPrice = (discount_p, price) => {
        const discount = discount_p / 100 * price
        return price - discount
    }

    const priceOnDiscount = discountPrice(discount, price)

    useEffect(() => {
        fetchSingeProduct(id)
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
            <Wrapper
                as={motion.div}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: .6}}
            >
                <GalleryMobile product={product}/>
                <div>
                    <ProductText product={product}/>
                    <div className="buttons">
                        <Button>
                            <img className='minus-icon' onClick={subtractQnt} src={minusIcon}
                                 alt=""/>
                            <h3>{qnt}</h3>
                            <img className='plus-icon' onClick={addQnt} src={plusIcon} alt=""/>
                        </Button>
                        <ButtonStyled
                            as={motion.button}
                            whileTap={{scale: .95}}
                            type='submit'
                            onClick={() => addToCart(name, priceOnDiscount, qnt, imageUrl)}>
                            <img className='cart-icon' src={cartIcon} alt=""/>
                            Add to cart
                        </ButtonStyled>
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  @media (min-width: 600px) {
    margin: 1rem 2rem;
  }

  @media (min-width: 800px) {
    margin-top: 3rem;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
  
  @media (min-width: 1200px) {
    
    .buttons {
      width: 100%;
      display: grid;
      grid-template-columns: 30% 70%;
      grid-gap: .1rem;
    }
  }
`

const Button = styled.button`
  margin: 1rem;
  width: 17.5rem;
  height: 3rem;
  background: #F7F8FD;
  color: #ffff;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Kumbh Sans', sans-serif;

  & > h3 {
    color: black;
  }

  .minus-icon {
    margin-left: 1.5rem;
    cursor: pointer;
  }

  .plus-icon {
    margin-right: 1.5rem;
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    width: 9rem;
  }

`

const ButtonStyled = styled.button`
  margin: 1rem;
  width: ${({width}) => width || '17.5rem'};
  height: 3rem;
  background: hsl(26, 100%, 55%);
  color: #ffff;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kumbh Sans', sans-serif;
  cursor: pointer;
  
  &:hover {
    opacity: .8;
  }

  .cart-icon {
    fill: #ffff;
    height: 1rem;
    width: 1rem;
    margin-right: .9rem;
  }

  @media (min-width: 800px) {
    width: 17rem;
  }
`

export default ProductPage;