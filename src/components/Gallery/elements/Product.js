import React from "react";
import styled from "styled-components";

const Product = (props) => {
  return <Wrapper>
      <img src={props.img} alt='img'/> 
      <h3>{props.text}</h3>
  </Wrapper>;
};

const Wrapper = styled.div`
  height: 20rem;
  width: 30rem;
  margin: 2rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  ::before{
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.7);
    border-radius: 2rem;
  }

  h3{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    font-size: 3rem;
    opacity: 0;
  }

  :hover{
      ::before{
        top: 0%; 
        border-radius: 2rem;
      }
      h3{
          top: 50%;
          opacity: 1;
      }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`;

export default Product;
