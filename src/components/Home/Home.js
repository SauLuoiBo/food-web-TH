import React from "react";
import styled from "styled-components";
import home from "../../assets/images/home-img.png";
import { Container } from "../../styles/GlobalComponents";
import MainButton from "../../styles/GlobalComponents/MainButton";
import data from "./data/dataHome";
import { Link as LinkS } from 'react-scroll'
import { Fade } from "react-reveal";


const Home = () => {
	return (
		<Wrapper id='home'>
			<Container>
				<WrapperHome>
					<Content>
						<h2>{data.title}</h2>
						<p>{data.main}</p>
						{/* <ButtonFood text="Get Start" /> */}
						<LinkS to='older'  duration={1000}  spy={true} smooth={true}>
						<MainButton>
						<h3>Get start</h3>
						</MainButton>
						</LinkS>
					</Content>
					<Img>
					<Fade top >
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
