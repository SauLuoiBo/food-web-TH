import styled from "styled-components";

export const Container = styled.div`
	display: block;
    justify-content: center;
    align-items: center;
    margin: 0 20rem;
	/* width: 80%; */

	@media ${(props) => props.theme.breakpoints.xl} {
        margin: 0 15rem;
        }

	@media ${(props) => props.theme.breakpoints.lg} {
        margin: 0 10rem;
        }

		@media ${(props) => props.theme.breakpoints.md} {
        margin:  0 0.2rem;
        }

		@media ${(props) => props.theme.breakpoints.sm} {
        margin: 0 0.2rem;
        }
`;
