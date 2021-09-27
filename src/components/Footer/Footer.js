import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import NavFooter from "./elements/NavFooter";
import { dataFooter1, dataFooter2, dataFooter3, dataFooter4 } from "./data/dataFooter";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>
            <NavFooter title='Contact Infor' data={dataFooter1} />
            <NavFooter title='Branch Location' data={dataFooter2} />
            <NavFooter title='Quick Links' data={dataFooter3} />
            <NavFooter title='Follow Us' data={dataFooter4} />
        </FooterWrapper>
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

  @media ${(props) => props.theme.breakpoints.md} {
		padding: 0 2rem;
	}
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
