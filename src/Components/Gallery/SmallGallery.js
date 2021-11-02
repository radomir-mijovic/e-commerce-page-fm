import React from 'react';
import styled from "styled-components";

const SmallGallery = ({product_images, setIndex, index}) => {

    return (
        <GalleryWrapper>
            {product_images.map((image, picIndex) => {
                const {images} = image;

                return (
                    <img
                        key={picIndex}
                        className={`img ${picIndex === index ? 'active' : ''}`}
                        onClick={() => setIndex(picIndex)}
                        src={images}
                        alt=""/>
                )
            })}
        </GalleryWrapper>
    );
};

const GalleryWrapper = styled.div`
  width: 100%;
  height: 5.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  .img {
    height: 5.5rem;
    width: 5.5rem;
    cursor: pointer;
    margin-right: .8rem;
    border: 2px solid #ffff;
    border-radius: 1rem;
    
  }
  
  .img:hover {
      opacity: .5;
    }

  .active {
    border: 2px solid hsl(26, 100%, 55%);
    opacity: .5;
  }

  @media (max-width: 1100px) {
    display: none;
  }

`

export default SmallGallery;