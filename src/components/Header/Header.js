import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import logo from "../../assets/images/logo-img.png";
import NavMenu from "./elements/NavMenu";

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const MenuMobile = () => {
		return (
			<MenuCol>
				<NavMenu />
			</MenuCol>
		);
	};

	return (
		<>
			<Wrapper>
				<Container>
					<HeaderWrapper>
						<Logo>
							<img src={logo} alt="logo" />
							<h2>Thu Hà Food</h2>
						</Logo>
						<MenuRow>
							<NavMenu />
						</MenuRow>
						<Btn className={isOpen ? "ro" : ""}>
							<i
								onClick={() => {
									setIsOpen(!isOpen);
								}}
								className={
									isOpen ? "fas fa-hamburger fa-times" : "fas fa-hamburger"
								}
							/>
						</Btn>
					</HeaderWrapper>
				</Container>
			</Wrapper>
			{isOpen ? <MenuMobile /> : ""}
		</>
	);
};

const Wrapper = styled.header`
	display: block;
	justify-content: center;
	padding: 2rem 0;
	background: #fff;
	box-shadow: 0 0.3rem 2rem rgb(0 0 0 / 10%);
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 999;
`;

const HeaderWrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	img {
		height: 5rem;
		margin-right: 1rem;
	}
`;

const MenuRow = styled.div`
	display: block;

	@media ${(props) => props.theme.breakpoints.lg} {
		display: none;
	}
`;

const Btn = styled.div`
	display: none;
	font-size: 3rem;
	color: var(--color-main);
	cursor: pointer;
	transition: all 0.2s linear;

	.ro {
		transform: rotate(180deg);
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		display: flex;

		.fa-times {
			transform: rotate(180deg);
		}
	}
`;

const MenuCol = styled.div`
	background-color: var(--color-yellow);
	position: fixed;
	top: 11rem;
	width: 100%;
	z-index: 50;
	display: none;
	/* height: 0;
	overflow: hidden; */

	@media ${(props) => props.theme.breakpoints.lg} {
		display: block;
	}
`;

export default Header;
