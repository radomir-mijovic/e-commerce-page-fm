import React, {useState} from 'react';
import styled from "styled-components";
import leftIcon from '../../assets/icons/icon-previous.svg'
import rightIcon from '../../assets/icons/icon-next.svg'
import SmallGallery from "./SmallGallery";
import {useGalleryContext} from "../context/gallery_context";

const GalleryMobile = ({product: {product_images}, display, size}) => {
    const [index, setIndex] = useState(0)
    const {openGallery} = useGalleryContext()

    const nextPic = () => {
        if (index === product_images.length - 1) {
            setIndex(0)
            return;
        }
        setIndex(prevState => prevState + 1)
    }

    const prevPic = () => {
        if (index === 0) {
            setIndex(product_images.length - 1)
            return
        }
        setIndex(prevState => prevState - 1)
    }

    const imageUrl = product_images.map((image) => {
        const {images} = image
        return images
    })

    return (
        <GalleryWrapper
            size={size}
            display={display}>
            <img onClick={openGallery}
                src={imageUrl[index]}
                className='product-img' alt=""/>
            <img src={leftIcon} className='left-icon' onClick={prevPic} alt=""/>
            <img src={rightIcon} className='right-icon' onClick={nextPic} alt=""/>
            <SmallGallery setIndex={setIndex} index={index} product_images={product_images}/>
        </GalleryWrapper>
    );
};

const GalleryWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;


  .product-img {
    height: ${({height}) => height || '100%'};
    width: ${({width}) => width || '100%'};
    background-size: cover;
    background-position: center;
    //margin: 0 auto;
    border: 1px solid #fad4c5;
    border-radius: 1rem;
    cursor: pointer;
  }

  .left-icon,
  .right-icon {
    position: absolute;
    background: #ffff;
    padding: 7px 10px;
    border-radius: 30px;
    top: 50%;
    cursor: pointer;
  }

  .left-icon {
    left: 0;
    margin-left: 1rem;
  }

  .right-icon {
    right: 0;
    margin-right: 1rem;
  }


  @media (min-width: 600px) {
    .product-img {
      height: 30rem;
      width: 30rem;
    }
  }

  @media (min-width: 680px) {
    .left-icon,
    .right-icon {
      background: #FEEEE1;
    }
  }

  @media (min-width: 1100px) {
    left: 0;

    .product-img {
      height: ${({size}) => size || '25rem'};
      width: ${({size}) => size || '25rem'};;
      border-radius: 1rem;
    }

    .left-icon {
      top: 17.5rem;
      left: -2.6rem;
    }
    
    .right-icon {
      top: 17.5rem;
      right: -2.6rem;
    }

    .left-icon,
    .right-icon {
      display: ${({display}) => display || 'none'};
      padding: 1rem 1.2rem;
      background: #ffff;
    }

  }

`

export default GalleryMobile;