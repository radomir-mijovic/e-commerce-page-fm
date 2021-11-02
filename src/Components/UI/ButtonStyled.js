import React from 'react';
import styled from "styled-components";

const ButtonStyled = ({children, width}) => {
    return (
        <Button width={width}>
            {children}
        </Button>
    );
};

const Button = styled.button`
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

export default ButtonStyled;