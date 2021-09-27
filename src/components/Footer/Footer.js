import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>adshjlsad</FooterWrapper>
        <Final>
          <h3>Creare by <span>Sau Luoi Designer</span> All Rights Reserved.</h3>
        </Final>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  background: var(--color-background2);
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Final = styled.div`
  align-items: center;
  text-align: center;
  border-top: 2px solid #fff;
  color: #fff;

  span{
      color: var(--color-yellow);
  }
`;

export default Footer;
