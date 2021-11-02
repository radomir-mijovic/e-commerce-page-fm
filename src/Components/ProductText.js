import React from 'react';
import styled from "styled-components";
import Prices from "./Prices/Prices";

const ProductText = ({product}) => {
    const {name, description, price, discount, company} = product;

    return (
        <Wrapper>
            <h3>{company}</h3>
            <h1>{name}</h1>
            <p>{description}</p>
            <Prices
                discount={discount}
                price={price}
            />
        </Wrapper>

    );
};

const Wrapper = styled.div`
  padding: 1rem 1rem;
  width: min(600px, 90%);

  & > h1 {
    font-size: clamp(1.4rem, 2vw, 2rem);
    margin-top: 1rem;
  }

  h3 {
    margin-top: 1rem;
    font-size: clamp(.9rem, 1vw, 1.1rem);
    color: hsl(26, 100%, 55%);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  & > p {
    color: rgba(0, 0, 0, .5);
    font-size: clamp(.9rem, 1vw, 1.5rem);
    line-height: 1.3rem;
    margin-top: 1rem;
  }
  
  @media (min-width: 1100px) {
    right: 0;
    
    & > h1 {
      width: 18rem;
    }
  }
`

export default ProductText;