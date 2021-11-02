import React from 'react';
import styled from "styled-components";
import homePic from '../../assets/images/image_processing20210412-9462-1xkb756.jpg'
import homePic2 from '../../assets/images/image_processing20210329-14682-1ffktx0.png'

const HomePage = () => {
    return (
        <HomePageWrapper>
            <h1>This has a perfect fit for me.Loved these right out the box!</h1>
            <div>
                <img className='img-1' src={homePic} alt='home page'/>
                <img className='img-2' src={homePic2} alt='home page'/>
            </div>
        </HomePageWrapper>
    );
};

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & > h1 {
    font-size: 2rem;
    text-align: center;
    margin-top: 4rem;
  }

  .img-1,
  .img-2 {
    height: 50%;
    width: 50%;
    margin-top: 3rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    
    & > h1 {
      font-size: 1.8rem;
    }

    .img-1,
    .img-2 {
      height: 70%;
      width: 70%;
      margin-top: 0;
    }
  }

  @media (max-width: 500px) {
    .img-1,
    .img-2 {
      height: 90%;
      width: 90%;
      margin-top: 0;
    }
  }
`

export default HomePage;