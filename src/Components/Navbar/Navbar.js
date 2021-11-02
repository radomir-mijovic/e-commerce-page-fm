import React from 'react';
import styled from "styled-components";
import cartIcon from '../../assets/icons/icon-cart.svg'
import userPic from '../../assets/images/image-avatar.png'
import logo from '../../assets/icons/logo.svg'
import menuIcon from '../../assets/icons/icon-menu.svg'
import {Container} from "../Container";
import {Link, NavLink} from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import {useNavbarContext} from "../context/navbar_context";
import {useCartContext} from "../context/cart_context";
import {useProductsContext} from "../context/products_context";


const Navbar = () => {
    const {sidebar, openSidebar} = useNavbarContext()
    const {showCart, hideCart, isCart, cart_item: {quantity}} = useCartContext()
    const {fetchProducts} = useProductsContext()

    const sideMenuCartHandler = () => {
        openSidebar()
        hideCart()
    }

    return (
        <>
            {sidebar && <NavbarMobile/>}
            <Container>
                <NavbarWrapper>
                    <div className='links'>
                        <img src={menuIcon} onClick={sideMenuCartHandler} className='menu-icon' alt=""/>
                        <Link to={'/'}>
                            <img className='logo' src={logo} alt=""/>
                        </Link>
                        <ul>
                            <li onClick={hideCart}>
                                <NavLink activeClassName='active' to='/products'>
                                    Collections
                                </NavLink>
                            </li>
                            <li onClick={hideCart}>
                                <NavLink activeClassName='active' to='/men'>Men
                                </NavLink>
                            </li>
                            <li onClick={hideCart}>
                                <NavLink activeClassName='active' to='/woman'>
                                    Women
                                </NavLink>
                            </li>
                            <li onClick={hideCart}>
                                <NavLink activeClassName='active' to='/about'>
                                    About
                                </NavLink>
                            </li>
                            <li onClick={hideCart}>
                                <NavLink activeClassName='active' to='/contact'>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='right-side'>
                        {quantity &&
                        <h3>{quantity}</h3>}
                        <img src={cartIcon} onClick={isCart ? hideCart : showCart} className='cart-icon' alt="Cart"/>
                        <img src={userPic} className='user-img' alt=""/>
                    </div>
                </NavbarWrapper>
            </Container>
        </>
    );
};

const NavbarWrapper = styled.nav`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};

  .links {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.grey};
    height: 100%;

    .menu-icon {
      display: none;
    }

    .active {
      border-bottom: 3px solid hsl(26, 100%, 55%);
    }

    & > ul {
      display: flex;
      font-size: 1rem;


      & > li {
        list-style-type: none;
        margin-right: 2rem;
        position: relative;
        cursor: pointer;
        border-bottom: 3px solid #ffff;
        transition: .5s;

        &:hover {
          border-bottom: 3px solid hsl(26, 100%, 55%);
        }


        & > a {
          text-decoration: none;
          color: ${({theme}) => theme.colors.grey};
        }
      }

    }

    .logo {
      height: 1.4rem;
      width: 10rem;
      margin-right: 3rem;
      cursor: pointer;
    }

  }

  .right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8rem;
    position: relative;

    & > h3 {
      left: .6rem;
      top: .4rem;
      color: #ffff;
      background: hsl(26, 100%, 55%);
      position: absolute;
      padding: .3px 8px;
      border-radius: 7px;
    }

    .cart-icon,
    .user-img {
      cursor: pointer;
    }

    .user-img {
      height: 3rem;
      width: 3rem;
      border: 2px solid #ffff;
      border-radius: 3rem;
      transition: .5s;

      &:hover {
        border: 2px solid hsl(26, 100%, 55%);
        border-radius: 3rem;
      }
    }

  }

  @media (max-width: 800px) {
    height: 8vh;
    border-bottom: none;

    .links {

      .menu-icon {
        display: block;
        margin-right: 1.2rem;
        cursor: pointer;
      }

      ul {
        display: none;
      }

      .logo {
        height: 1.3rem;
        width: 9rem;
      }
    }

    .right-side {
      width: 4.5rem;

      & > h3 {
        top: 0;
      }

      .user-img {
        height: 1.7rem;
        width: 1.7rem;
      }
    }

  }


`

export default Navbar;