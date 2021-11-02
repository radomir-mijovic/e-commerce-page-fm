import React from 'react';
import {Container} from "../Container";
import SWW from '../../assets/images/something_went_wrong.jpg'
import styled from "styled-components";

const SomethingWentWrong = () => {
    return (
        <Container>
            <Wrapper>
                <img src={SWW} alt=""/>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  & > img {
    height: 40rem;
    width: 40rem;
  }

  @media (max-width: 800px) {
    & > img {
      height: 20rem;
      width: 20rem;
      padding-top: 3rem;
    }
  }
`

export default SomethingWentWrong;