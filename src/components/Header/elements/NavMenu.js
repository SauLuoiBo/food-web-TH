import React from 'react'
import styled from 'styled-components'
import { dataHeader } from '../data/dataHeader'
import { Link as LinkS, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as Scroll from 'react-scroll';



const NavMenu = () => {

    return (
        <Wrapper>
            {dataHeader.map((menu, index) =>
                <NavLink to={menu.link} key = {index} activeClass="active" duration={500}  spy={true} smooth={true} >
                    <h3>{menu.title}</h3>
                </NavLink>
                )}
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media ${(props) => props.theme.breakpoints.lg} {
		flex-direction: column;
	}
`

const NavLink = styled(LinkS)`
    font-size: 3rem;
    color: var(--color-main);

    :hover{
        color: var(--color-primary);
    }

    &.active{
        color: var(--color-primary);
    }
`


export default NavMenu
