import React from "react";
import styled from "styled-components";
import img1 from "../../../assets/images/product-1.jpg";
import ButtonFood from "../../../styles/GlobalComponents/ButtonFood";

const Cart = () => {
	return (
		<Wrapper>
			<img src={img1} alt="asd" />
			<h3>Delicious Food</h3>
			<div>
				<i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
			</div>
			<p>$30.00</p>
			<ButtonFood text="Add To Cart" />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* flex: 1 1 auto; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	padding: 2rem;
	margin: 2rem;
	width: 35rem;
	text-align: center;
	border-radius: 1rem;

	img {
		height: 20rem;
		width: 100%;
		object-fit: cover;
		border-radius: 2rem;
	}

    i{
        color: var(--color-yellow);
        margin: 0 0.2rem;
    }
`;

export default Cart;
