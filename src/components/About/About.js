import React from "react";
import about from '../../assets/images/about-img.jpg'
import frame from '../../assets/images/about-frame-img.png'
import data from './data/dataAbout'
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import ButtonFood from "../../styles/GlobalComponents/ButtonFood";

const About = () => {
	return (
		<Wrapper id='about'>
			<Container>
				<WrapperAbout>
					<Img>
						{/* <img src={about} alt="home" /> */}
					</Img>
					<Content>
						<h2>{data.title}</h2>
						<p>{data.main}</p>
						<ButtonFood text="Learn More" />
					</Content>
				</WrapperAbout>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 10rem;
	display: block;
	width: 100%;
`;

const WrapperAbout = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	position: relative;
	z-index: 0;
	overflow: hidden;
	flex-direction: row;
	margin: 20rem 0;
`;

const Content = styled.div`
	display: block;
	flex: 1 1 39rem;
	justify-content: center;
	text-align: left;

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
    height: 50rem;
    background: url(${frame}), url(${about}) no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: screen;

	justify-content: center;
	align-items: center;
	text-align: center;
	img {
		height: 40rem;
	}
`;

export default About;
