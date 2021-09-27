import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import Product from "./elements/Product";
import { dataGallery } from "./data/dataGallery";

const Gallery = () => {
  return (
    <Wrapper id='gallery'>
      <Container>
        <GalleryWrapper>
          <h2>
            Our Food <span>Gallery</span>
          </h2>
          <ProductWrapper>
            {dataGallery.map((data, index) => 
                <Product key={index} img={data.img} text={data.text} />
            )} 
          </ProductWrapper>
        </GalleryWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 10rem;
  display: block;
  width: 100%;
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  /* position: relative; */
  z-index: 0;
  overflow: hidden;
  /* flex-direction: row; */

  span {
    color: var(--color-yellow);
    font-size: 5rem;
  }
`;

const ProductWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export default Gallery;
