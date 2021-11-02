import React from 'react';
import styled from "styled-components";
import GalleryMobile from "./GalleryMobile";
import {useProductsContext} from "../context/products_context";
import closeIcon from '../../assets/icons/icon-close.svg'
import {useGalleryContext} from "../context/gallery_context";

const Gallery = () => {
    const {product} = useProductsContext()
    const {closeGallery} = useGalleryContext()

    return (
        <BigGalleryWrapper>
            <div>
                <img onClick={closeGallery}
                     className='icon-close'
                     src={closeIcon} alt=""/>
                <GalleryMobile
                    size={'35rem'}
                    display={'flex'}
                    product={product}/>
            </div>
        </BigGalleryWrapper>
    );
};

const BigGalleryWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
  z-index: 400;

  & > div {
    position: relative;

    .icon-close {
      top: -2.8rem;
      right: 0;
      position: absolute;
      height: 1.5rem;
      width: 1.4rem;
      cursor: pointer;
    }
  }


  @media (max-width: 1100px) {
    display: none;
  }
`

export default Gallery;