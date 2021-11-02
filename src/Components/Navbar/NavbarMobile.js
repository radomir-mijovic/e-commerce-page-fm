import React from 'react';
import styled from "styled-components";
import closeIcon from '../../assets/icons/icon-close.svg'
import {Link} from "react-router-dom";
import {useNavbarContext} from "../context/navbar_context";
import {motion} from "framer-motion";

const NavbarMobile = () => {
    const {closeSidebar} = useNavbarContext()

    return (
        <NavWrapper
            as={motion.div}
            initial={{x: '-100%'}}
            animate={{x: 0}}
            exit={{x: '-100px'}}
            transition={{duration: .5}}
        >
            <div className='navbar'>
                <img src={closeIcon} onClick={closeSidebar} alt=""/>
                <ul>
                    <li>
                        <Link onClick={closeSidebar} to='/products'>
                            Collections
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeSidebar} to='/men'>
                            Men
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeSidebar} to='/woman'>
                            Women
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeSidebar} to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeSidebar} to='/contact'>
                            Contact
                        </Link></li>
                </ul>
            </div>
        </NavWrapper>
    );
};

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  z-index: 5;

  .navbar {
    background: #ffff;
    width: 65%;
    height: 100%;

    & > img {
      padding-top: 1.6rem;
      cursor: pointer;
      height: 1.4rem;
      width: 1.4rem;
    }

    & > img,
    ul {
      padding-left: 1rem;
    }

    & > ul {
      font-size: 1.1rem;
      margin-top: 3rem;

      & > li {
        margin: 1.2rem 0;

        & > a {
          font-weight: 600;
        }
      }
    }
  }

  @media (min-width: 800px) {
    display: none;
  }
`

export default NavbarMobile;