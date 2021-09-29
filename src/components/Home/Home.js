import React from "react";
import styled from "styled-components";
import home from "../../assets/images/home-img.png";
import { Container } from "../../styles/GlobalComponents";
import MainButton from "../../styles/GlobalComponents/MainButton";
import data from "./data/dataHome";
import { Link as LinkS } from "react-scroll";
import { Fade } from "react-reveal";
import { move } from "../../styles/animation/keyfame";

const Home = () => {
	return (
		<Wrapper id="home">
			<Container>
				<WrapperHome>
					<Content>
						<h2>{data.title}</h2>
						<p>{data.main}</p>
						{/* <ButtonFood text="Get Start" /> */}
						<LinkS to="older" duration={1000} spy={true} smooth={true}>
							<MainButton>
								<h3>Get start</h3>
							</MainButton>
						</LinkS>
					</Content>
					<Img>
						<Fade top>
							<img src={home} alt="home" />
						</Fade>
					</Img>
				</WrapperHome>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 10rem;
	display: block;
	width: 100%;
	overflow: hidden;
	position: relative;

	::before {
		content: "";
		position: absolute;
		top: 5rem;
		right: -6rem;
		background: var(--yellow);
		border-radius: 3rem;
		transform: rotate(-45deg);
		height: 40rem;
		width: 70rem;
		z-index: -2;
		top: -7rem;
		background: #fff;
		box-shadow: 0 1rem 4rem rgb(0 0 0 / 10%);
		z-index: -1;
		animation: ${move} 2s linear;
	}

	::after {
		content: "";
		position: absolute;
		top: 5rem;
		right: -6rem;
		
		border-radius: 3rem;
		transform: rotate(-45deg);
		height: 40rem;
		width: 70rem;
		z-index: -2;
		background: var(--color-yellow);
		box-shadow: 0 1rem 4rem rgb(0 0 0 / 10%);
		animation: ${move} 1s linear;
	}
`;

const WrapperHome = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	position: relative;
	z-index: 0;
	overflow: hidden;
	flex-direction: row;
	margin: 20rem 0;
	@media ${(props) => props.theme.breakpoints.md} {
		margin: 5rem 0;
	}
`;

const Content = styled.div`
	display: block;
	flex: 1 1 39rem;
	justify-content: center;
	text-align: justify;

	/* a{
        justify-content: center;
        display: flex;
    } */

	@media ${(props) => props.theme.breakpoints.md} {
		text-align: center;
		padding: 0 2rem;
	}
`;

const Img = styled.div`
	display: block;
	flex: 1 1 39rem;

	justify-content: center;
	align-items: center;
	text-align: center;
	img {
		height: 40rem;
	}
`;

export default Home;
