import React from 'react';
import styled from "styled-components";
import arrowIcon from '../../assets/icons/arrow-right.svg'
import {Link} from "react-router-dom";

const ProductsGridCards = ({filteredProducts, discountPrice}) => {

    return (
        <Wrapper>
            {filteredProducts.map(item => {
                const {id, name, price, image, discount} = item;

                return (
                    <div key={id} className='item'>
                        <img src={image} alt=""/>
                        <H2>{discount}%</H2>
                        <div>
                            <H1>{name}</H1>
                            <div className="prices">
                                <H3Discount>${discountPrice(discount, price)}.00</H3Discount>
                                <h3 className='slash'>/</h3>
                                <H3Price>${price}</H3Price>
                            </div>
                            <Link to={`/product/${id}`}>
                                Check Product
                                <img src={arrowIcon} alt=""/>
                            </Link>
                        </div>
                    </div>
                )
            })}

        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 21rem);
  grid-gap: 3rem 2.5rem;
  justify-content: center;
  margin-top: 2rem;

  .item {
    position: relative;
    background: #F8F7F3;
    height: 27rem;
    border-radius: 2rem;
    margin-top: 2rem;

    & > img {
      position: absolute;
      right: -1rem;
      top: -1rem;
      background-size: cover;
      overflow: hidden;
      width: 18rem;
      height: 18rem;
      border-radius: 0 2rem;
      box-shadow: #F1F1F1 0 0 5px 3px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      
      & > a {
        display: flex;
        align-items: center;
        font-size: 1rem;
        justify-content: center;
        margin-bottom: 1rem;
        background: #ffff;
        width: 60%;
        border-radius: 2rem;
        padding: .5rem 0;
        transition: .5s;
        
        &:hover {
          background: #FEEEE1;
        }
        
        & > img {
          margin-left: 1rem;
        }
        
      }
      
    }

    .prices {
      display: flex;
      justify-content: center;
      margin: .5rem 0;

      .slash {
        font-size: 1.2rem;
        font-weight: unset;
      }
    }

  }
  
  @media (max-width: 450px) {
    display: none;
  }

`

const H1 = styled.h1`
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const H3Discount = styled.h3`
  color: #c7a666;
  margin-right: .4rem;
  font-size: 1.2rem;
  font-weight: unset;
`

const H3Price = styled.h3`
  color: #8B8987;
  margin-left: .4rem;
  text-decoration: line-through;
  font-weight: unset;
  font-size: 1.2rem;
`

const H2 = styled.h2`
  background: #FEEEE1;
  position: absolute;
  right: 0;
  padding: 3px 15px;
  border-radius: 1rem;
`

export default ProductsGridCards;