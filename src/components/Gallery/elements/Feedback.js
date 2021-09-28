import React from "react";
import styled from "styled-components";

const Feedback = (props) => {
	return (
		<ReviewWrapper>
			<img src={props.img} alt="pic1" />
			<div>
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
				<i className="fas fa-star" />
			</div>
			<p>
				{props.text}
			</p>
			<h3>{props.name}</h3>
			<main>{props.client}</main>
			<i className="fas fa-quote-left left" />
			<i className="fas fa-quote-right right" />
		</ReviewWrapper>
	);
};

const ReviewWrapper = styled.div`
    /* display: inline-flex;
    flex-direction: column; */
    flex: 1 1 30rem ;
    justify-content: center;
    align-items: center;
    border: var(--border);
    border-radius: var(--border-radius);
    text-align: center;
    position: relative;
    z-index: 0;
    padding: 2rem;
    width: 100%;
    margin: 2rem 4rem;
    max-width: 120rem;
    

    /* @media ${(props) => props.theme.breakpoints.md} {
		transform: translateX(-15px);
        max-width: 50rem;

	} */

    /* @media ${(props) => props.theme.breakpoints.lg} {
		transform: translateX(-15px);
        max-width: 70rem;

	} */

    img {
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        margin-bottom: .7rem;
    }

    i{
        margin: 0 0.1rem;

    }

    p{
        margin: 2rem 0 ;

        text-transform: none;
    }

    .left{
            position: absolute;
            top: 2rem;
            left: 2.5rem;
            font-size: 5rem;
            color: #ccc;
        }
    .right{
            position: absolute;
            bottom: 2rem;
            right: 2.5rem;
            font-size: 5rem;
            color: #ccc;
        }

    :hover{
        .left{
            top: -6rem;
        }

        .right{
            bottom: -6rem;
        }
    }
`

export default Feedback;
