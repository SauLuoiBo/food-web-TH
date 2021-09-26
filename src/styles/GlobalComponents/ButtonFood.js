import React from "react";
import styled from "styled-components";

const ButtonFood = (props) => {
	return (
		<Wrapper>
			<h5>{props.text}</h5>
		</Wrapper>
	);
};

const Wrapper = styled.button`
	/* display: block; */
	/* width: fit-content; */
	font-size: 1.7rem;
	padding: 0.4rem 4rem;
	border-radius: 5rem;
	margin-top: 1rem;
	background: none;
	color: #333;
	cursor: pointer;
	border: 0.2rem solid var(--color-yellow);
`;

export default ButtonFood;
