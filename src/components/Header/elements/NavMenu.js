import React from 'react'
import styled from 'styled-components'
import { dataHeader } from '../data/dataHeader'



const NavMenu = () => {
    return (
        <Wrapper>
            {dataHeader.map((menu, index) =>
                <a href={menu.link} key = {index}>
                    <h3>{menu.title}</h3>
                </a>
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


export default NavMenu
