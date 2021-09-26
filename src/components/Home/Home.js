import React from "react";
import styled from "styled-components";
import home from "../../assets/images/home-img.png";
import { Container } from "../../styles/GlobalComponents";
import ButtonFood from "../../styles/GlobalComponents/ButtonFood";
import data from "./data/dataHome";

const Home = () => {
	return (
		<Wrapper>
			<Container>
				<WrapperHome>
					<Content>
						<h2>{data.title}</h2>
						<p>{data.main}</p>
						<ButtonFood text="Get Start" />
					</Content>
					<Img>
						<img src={home} alt="home" />
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
	position: relative;
	z-index: 0;
	overflow: hidden;
	flex-direction: row;
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

	justify-content: center;
	align-items: center;
	text-align: center;
	img {
		height: 40rem;
	}
`;

export default Home;
