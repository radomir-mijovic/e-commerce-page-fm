import styled from "styled-components";

export const Container = styled.div`
  padding: 0 11rem;
  background: ${({background}) => background || null};

  @media (max-width: 1260px) {
    padding: 0 10rem;
  }

  @media (max-width: 1100px) {
    padding: 0 5rem;
  }

  @media (max-width: 950px) {
    padding: 0 2rem;
  }


`

