import React from 'react'
import { Container } from '../../styles/GlobalComponents'
import styled from 'styled-components'
import ButtonFood from '../../styles/GlobalComponents/ButtonFood'

const Menu = () => {
    return (
        <Wrapper>
            <Container>
                <WrapperMenu>
                    <h2>Our Delicious <span>Menu</span></h2>
                    <Select>
                        <ButtonFood text='Breack' />
                        <ButtonFood text='Breack' />
                        <ButtonFood text='Breack' />
                        <ButtonFood text='Breack' />
                    </Select>
                </WrapperMenu>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
	padding-top: 10rem;
	display: block;
	width: 100%;
`;


const WrapperMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	position: relative;
	z-index: 0;
	overflow: hidden;
	flex-direction: row;

    span{
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
    border-top: .3rem dashed rgba(0,0,0,.2);
    border-bottom: .3rem dashed rgba(0,0,0,.2);

`

export default Menu
