import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Fade } from "react-reveal";

import ButtonFood from "../../../styles/GlobalComponents/ButtonFood";

const Cart = (props) => {
	return (
		<Fade right>

		
		<Wrapper>
			<img src={props.img} alt="asd" />
			<h3>{props.name}</h3>
			<div>
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
			</div>
			<p>giá: {props.cost} <i className="fas fa-heart red"></i></p>
			<Link to='older' duration={1000}  spy={true} smooth={true}>
				<ButtonFood text="Add To Cart" onClick={() => console.log("dassda")} />
			</Link>
		</Wrapper>
		</Fade>
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

	i {
		color: var(--color-yellow);
		margin: 0 0.2rem;

		&.red{
			color: red;
		}
	}
`;

export default Cart;
