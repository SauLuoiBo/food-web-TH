import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<Main>{children}</Main>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: block;
	justify-content: center;
	align-items: center;
    position: relative;
	/* margin: 0 20rem; */
`;

const Main = styled.main`
	/* margin-top: 10rem; */
`;

export default Layout;
