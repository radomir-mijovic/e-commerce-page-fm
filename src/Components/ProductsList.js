import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useProductsContext} from "./context/products_context";
import {SearchInputStyled} from "./UI/SearchInput";
import {motion} from "framer-motion";
import ProductsGridCards from "./Products/ProductsGridCards";

const ProductsList = () => {
    const {filteredProducts, filterProducts} = useProductsContext()

    const discountPrice = (discount_p, price) => {
        const discount = discount_p / 100 * price
        return price - discount
    }


    return (
        <>
            <Search>
                <SearchInputStyled
                    onChange={(e) => filterProducts(e)}
                    placeholder='Search'/>
            </Search>
            <ProductsGridCards
                discountPrice={discountPrice}
                filteredProducts={filteredProducts}
            />

            {filteredProducts.map(product => {
                const {id, name, image, price, discount, company} = product;

                return (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: .6}}
                        whileTap={{scale: .95}}
                        key={id}>
                        <Link to={`/product/${id}`}>
                            <ItemStyled>
                                <img src={image} alt=""/>
                                <div className='items'>
                                    <h2>{name}</h2>
                                    <h3>{company}</h3>
                                    <h2>$ {discountPrice(discount, price)}.00</h2>
                                </div>
                            </ItemStyled>
                        </Link>
                    </motion.div>
                )
            })}
        </>
    );
};

const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const ItemStyled = styled.div`
  border: none;
  border-radius: 1rem;
  height: 5.5rem;
  width: 100%;
  box-shadow: #F1F1F1 0 0 5px 7px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > img {
    height: 4rem;
    width: 4rem;
    border: none;
    border-radius: 5px;
    margin-left: 1rem;
  }

  .items {
    margin-top: .5rem;
    margin-left: 2rem;

    & > h2 {
      font-size: 1rem;
      width: 10rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 5px;
    }

    & > h3 {
      color: hsl(26, 100%, 55%);
      font-size: .8rem;
      font-weight: unset;
      margin-bottom: 5px;

    }
  }

  @media (min-width: 450px) {
    display: none;
  }
`

export default ProductsList;