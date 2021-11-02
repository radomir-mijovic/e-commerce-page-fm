import React from 'react';
import styled from "styled-components";
import ButtonStyled from "../UI/ButtonStyled";
import CartItem from "./CartItem";
import {useCartContext} from "../context/cart_context";
import {motion} from "framer-motion";
import closeIcon from '../../assets/icons/icon-close.svg'


const Cart = () => {
    const {cart_item: {name, imageUrl}, hideCart} = useCartContext()

    return (
            <CartWrapper
                as={motion.div}
                initial={{opacity: 0, y: '-30%'}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: '-50%'}}
                transition={{duration: .4}}>
                <div className='cart'>
                    <h2>
                        Cart
                        <img onClick={hideCart} src={closeIcon} alt=""/>
                    </h2>

                </div>
                <div className='cart-items'>
                    {name || imageUrl ?
                        <>
                            <CartItem/>
                            <ButtonStyled width={'15.5rem'}>
                                Checkout
                            </ButtonStyled>
                        </> :
                        <h2>Your cart is empty.</h2>
                    }
                </div>
            </CartWrapper>
    );
};

const CartWrapper = styled.div`
  position: fixed;
  width: 17.5rem;
  min-height: 14rem;
  z-index: 1;
  background: #ffff;
  border: none;
  border-radius: 10px;
  top: 5.7rem;
  right: 3rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;

  & > .cart {
    height: 2.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin-bottom: 1rem;
    //display: flex;

    & > h2 {
      margin-top: 1.6rem;
      margin-left: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      & > img {
        margin-right: 1rem;
        cursor: pointer;
      }
    }
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
      margin-top: 3rem;
      color: rgba(0, 0, 0, .5);
    }
  }

  @media (min-width: 800px) {
    width: 19rem;
  }
`

export default Cart;