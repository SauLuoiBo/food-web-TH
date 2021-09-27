import React from 'react'
import styled from 'styled-components'


const NavFooter = (props) => {
    return (
        <Wrapper>
            <h3>{props.title}</h3>

            {props.data.map((data, index) => 
            <p key={index}>
                <i className={data.icon}/> {data.text}
            </p>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: block;
    flex: 1 1 25rem;
    color: #fff;
    margin: 3rem 0;

    h3{
        margin-bottom: 2rem;
    }

    p{
        font-size: 1.6rem;
        color: #fff;
        margin: 0.5rem 0;
        cursor: pointer;
    }

    i{
        width: 2rem;
    }
`

export default NavFooter
