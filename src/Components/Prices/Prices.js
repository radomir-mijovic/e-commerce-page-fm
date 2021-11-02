import React, {useEffect} from 'react';
import styled from "styled-components";

const Prices = ({price, discount}) => {

    const discountPrice = (discount_p, price) => {
        const discount = discount_p / 100 * price
        return price - discount
    }

    useEffect(() => {
        discountPrice(discount, price)
    }, [discount])

    return (
        <PriceWrapper>
            <div>
                <h1>${discountPrice(discount, price)}.00</h1>
                <h2>{discount}%</h2>
            </div>
            <h2 className='price'>${price}.00</h2>
        </PriceWrapper>
    );
};

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  & > h2 {
    text-decoration: line-through;
    color: #C2C5CA;
    font-size: clamp(1.2rem, 1.4vw, 1.2rem);
  }

  & > div {
    display: flex;
    align-items: center;
    width: min(300px, 100%);

    & > h1 {
      font-size: clamp(1.4rem, 1.8vw, 1.6rem);
      margin-right: 1rem;
    }

    & > h2 {
      padding: 3px 6px;
      background: #FEEEE1;
      color: hsl(26, 100%, 55%);
      border-radius: 5px;
    }
  }
  
  @media (min-width: 1100px) {
    flex-direction: column;
    
    & > div {
      width: 100%;
      margin-bottom: .5rem;
    }
    
    .price {
      width: 100%;
    }
  }

`

export default Prices;