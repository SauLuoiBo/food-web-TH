import React from "react";
import { Container } from "../../styles/GlobalComponents";
import styled from "styled-components";
import ButtonFood from "../../styles/GlobalComponents/ButtonFood";
import { dataMenu, dataMenuImg } from "./data/dataMenu";

const Menu = () => {
	const [imgNumber, setImgNumber] = React.useState(0);

	const List = () => {
		return (
			<>
				{dataMenu.map((data, index) => (
					<ListWrapper key={index}>
						<h3>
							<span>{data.stt}</span>
						</h3>
						<Text>
							<h3>{data.title}</h3>
							<p>{data.text}</p>
						</Text>
					</ListWrapper>
				))}
			</>
		);
	};

	return (
		<Wrapper id="menu">
			<Container>
				<WrapperMenu>
					<Stt>
						<h2>
							Our Delicious <span>Menu</span>
						</h2>
					</Stt>
					<Select>
						<ButtonFood
							onClick={() => setImgNumber(0)}
							isSet={imgNumber === 0}
							text="Buổi Sáng"
						/>
						<ButtonFood
							onClick={() => setImgNumber(1)}
							isSet={imgNumber === 1}
							text="buổi Trưa"
						/>
						<ButtonFood
							onClick={() => setImgNumber(2)}
							isSet={imgNumber === 2}
							text="Buổi Tối"
						/>
						<ButtonFood
							onClick={() => setImgNumber(3)}
							isSet={imgNumber === 3}
							text="Ăn đêm"
						/>
					</Select>
				</WrapperMenu>
				<ContentWrapper>
					<Img>
						{dataMenuImg.map((data, index) => {
							return (
								<div key={index}>
									{index === imgNumber && <img src={data.img} alt="img" />}
								</div>
							);
						})}
					</Img>
					<Content>
						<List />
					</Content>
				</ContentWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 10rem;
	display: block;
	width: 100%;
`;

const WrapperMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	/* flex-wrap: wrap; */
	/* position: relative; */
	z-index: 0;
	overflow: hidden;

	/* flex-direction: row; */
	@media ${(props) => props.theme.breakpoints.md} {
		margin: 5rem 0;
	}

	span {
		color: var(--color-yellow);
		font-size: 5rem;
	}
`;

const Select = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	justify-content: center;
	flex-wrap: wrap;
	padding: 1rem 0;
	margin: 2rem 0;
	border-top: 0.3rem dashed rgba(0, 0, 0, 0.2);
	border-bottom: 0.3rem dashed rgba(0, 0, 0, 0.2);
	width: 100%;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	/* position: relative; */
	z-index: 0;
	overflow: hidden;
	/* flex-direction: row; */
	margin-bottom: 20rem;
`;

const Content = styled.div`
	display: block;
	flex: 1 1 39rem;
`;

const Img = styled.div`
	display: block;
	flex: 1 1 39rem;
	justify-content: center;
	align-items: center;
	text-align: center;
	object-fit: cover;
	border-radius: 1rem;
	margin: 2rem;
	padding: 2rem;

	border-radius: 1rem;
	box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 20%);

	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
`;

const ListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;

	span {
		color: var(--color-yellow);
	}

	/* div{
        width: 5rem;
    } */
`;

const Text = styled.div`
	display: block;
	width: 100%;
	margin-left: 2rem;
	margin-bottom: 2rem;
	text-transform: none;
`;

const Stt = styled.div``;

export default Menu;
