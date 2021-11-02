import React from 'react';
import styled from "styled-components";
import errorImg from '../../assets/images/error_page.png'
import {Container} from "../Container";

const ErrorPage = () => {
    return (
        <Container>
            <ErrorWrapper>
                <img src={errorImg} alt=""/>
            </ErrorWrapper>
        </Container>
    );
};

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  
  & > img {
    height: 50vh;
    width: auto;
  }
`

export default ErrorPage;