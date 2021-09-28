import React from "react";
import styled from "styled-components";

const ListOrder = (props) => {
	return (
		<Wrapper>
            <h4>Khách hàng:</h4>
			<p>{props.name}</p>
            <h4>Đặt:</h4>
			<p>{props.request}</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem 0rem;
    font-size: 1.5rem;
    color: #333;
    text-transform: none;
    background: #f0f0f0;
    /* width: 50%; */
    border: none;
    border-radius: 1rem;
    text-justify: auto;
    

    h4{
        color: red;
    }

    p{
        text-transform: none;
        word-wrap: break-word
    }
`;

export default ListOrder;
