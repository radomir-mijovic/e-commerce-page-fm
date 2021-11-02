import styled from "styled-components";

export const SearchInputStyled = styled.input`
  width: 100%;    
  height: 2.2rem;
  background: #F8F8F8;
  border: none;
  border-radius: .6rem;
  margin: 1rem 0;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1px;
  box-shadow: #F1F1F1 0 0 5px 4px;
  outline: none;
  
  @media (min-width: 450px) {
    //position: absolute;
    width: 25rem;
  }
`