import React from 'react';
import styled from "styled-components";
import trashIcon from '../../assets/icons/icon-delete.svg'
import {useCartContext} from "../context/cart_context";
import {motion} from "framer-motion";

const CartItem = () => {
    const {cart_item: {name, price, quantity, imageUrl}, emptyCart} = useCartContext()

    const priceTotal = price * quantity

    return (
        <Wrapper
            as={motion.div}
            initial={{y: '-50%'}}
            animate={{y: 0}}
        >
            <img src={imageUrl} alt=""/>
            <div className='info'>
                <h2>{name}</h2>
                <div className="price-box">
                    <h2 className='price'>${price}.00 x {quantity}</h2>
                    <h2>${priceTotal}.00</h2>
                </div>
            </div>
            <img className='trash-icon' onClick={emptyCart} src={trashIcon} alt=""/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 15.5rem;
  height: 3rem;
  display: flex;
  align-items: center;

  & > .info {
    width: 100%;
    margin-left: 1rem;

    & > h2 {
      font-size: 1rem;
      width: 10rem;
      color: #67686C;
      font-weight: unset;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }

    .price-box {
      display: flex;

      .price {
        color: #67686C;
        margin-right: 5px;
      }
    }
  }

  & > img {
    height: 3rem;
    width: 3rem;
    border-radius: 5px;
  }

  .trash-icon {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }
`

export default CartItem;