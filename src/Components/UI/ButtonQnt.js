import React from 'react';
import styled from "styled-components";
import plusIcon from '../../assets/icons/icon-plus.svg'
import minusIcon from '../../assets/icons/icon-minus.svg'

const ButtonQnt = () => {
    return (
        <Button>
            <img className='minus-icon' src={minusIcon} alt=""/>
            <h3>0</h3>
            <img className='plus-icon' src={plusIcon} alt=""/>
        </Button>
    );
};

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
`

export default ButtonQnt;