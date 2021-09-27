import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/popular-bg.jpg";
import { Container } from "../../styles/GlobalComponents";
import Cart from "./elements/Cart";

const Popular = () => {
	return (
		<Wrapper id="popular">
			<Container>
				<PopularWrapper>
					<h2>
						Most <span>Popular</span> Foods{" "}
					</h2>
					<CartWrapper>
						<Cart />
						<Cart />
						<Cart />
						<Cart />
					</CartWrapper>
				</PopularWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: linear-gradient(
			rgba(255, 255, 255, 0.7),
			rgba(255, 255, 255, 0.7)
		),
		url(${bg}) no-repeat;
	background-size: 100% 100vh;
	background-position: left top;
	background-attachment: fixed;
	display: block;
	min-height: 100vh;
`;

const PopularWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	/* flex-wrap: wrap; */
	/* position: relative; */
	z-index: 0;
	overflow: hidden;
	padding-top: 10rem;

	/* flex-direction: row; */

	span {
		color: var(--color-yellow);
		font-size: 5rem;
	}
`;

const CartWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export default Popular;
