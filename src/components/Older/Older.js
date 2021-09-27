import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import older from "../../assets/images/form-img.jpg";
import ButtonFood from "../../styles/GlobalComponents/ButtonFood";

const Older = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperOlder>
          <h2>
            Make An <span>Older</span>
          </h2>
          <FormWrapper>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Your Password" />
              <input type="number" placeholder="Your Number" />
              <ButtonFood text="Older Now" />
            </form>
            <Img>
              <img src={older} alt="older" />
            </Img>
          </FormWrapper>
        </WrapperOlder>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;
  display: block;
  width: 100%;
`;

const WrapperOlder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: var(--color-yellow);
    font-size: 5rem;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  background: #fff;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%);
  border-radius: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 2rem 6rem;
  }

  form {
    flex: 1 1 60%;
    background: #fff;
    padding: 2rem;
  }

  input {
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    color: #333;
    text-transform: none;
    background: #f0f0f0;
    width: 100%;
  }
`;

const Img = styled.div`
  flex: 1 1 40%;
  display: block;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export default Older;
