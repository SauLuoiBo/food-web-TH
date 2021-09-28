import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import older from "../../assets/images/form-img.jpg";
import ButtonFood from "../../styles/GlobalComponents/ButtonFood";
import ListOrder from "./elements/ListOrder";


const Older = () => {

  const too = () => {
    console.log(newOrder)
    if (newOrder.name === "" || newOrder.request === "") {
			alert("ALl the fields are mandatory!");
        return;}
 

    setOrder([ ...order,newOrder])
    console.log(order, 'SAD')
    setNewOrder(
      {
        name: '',
        request:  '',
      }
    )
  }

  const [newOrder, setNewOrder ] = React.useState(
    {
      name: '',
      request:  '',
    }
  )

  const [order, setOrder] = React.useState([])

  return (
    <Wrapper id='older'>
      <Container>
        <WrapperOlder>
          <h2>
            Make An <span>Order</span>
          </h2>
          <FormWrapper>
            <div>
              <input type="text"  value={newOrder.name} onChange={(e)=>setNewOrder({ ...newOrder, name: e.target.value })} placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
              <input type="text" placeholder="Your Address" />
              <input type="number" placeholder="Your Number" />
              <textarea placeholder="Request" cols='10' rows='30' value={newOrder.request} onChange={(e)=>setNewOrder({ ...newOrder, request: e.target.value })} />
              <ButtonFood text="Order Now" onClick={()=>too()}/>
            </div>
            <Img>
              <img src={older} alt="older" />
            </Img>
          </FormWrapper>
          <h2>
            List <span>Order</span>
          </h2>
          <ListWrapper>
          {order.length > 0
						? <>
            {order.map((data,index) => 
              <ListOrder name={data.name} request={data.request} key={index} />
            )}
            </>
						: "No order available"}
            
          </ListWrapper>
        </WrapperOlder>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;
  display: block;
  width: 100%;
`;

const WrapperOlder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: var(--color-yellow);
    font-size: 5rem;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  background: #fff;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%);
  border-radius: 1rem;
  /* margin-bottom: 30rem; */
  


  @media ${(props) => props.theme.breakpoints.md} {
    margin: 2rem 6rem;
  }

  div {
    flex: 1 1 60%;
    background: #fff;
    padding: 2rem;
  }

  input {
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    color: #333;
    text-transform: none;
    background: #f0f0f0;
    width: 100%;
    border: none;
    border-radius: 1rem;
  }

  textarea{
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    color: #333;
    text-transform: none;
    background: #f0f0f0;
    width: 100%;
    resize: none;
    height: 15rem;
    border: none;
    border-radius: 1rem;
  }
`;

const Img = styled.div`
  flex: 1 1 40%;
  display: block;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 2rem 0;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%);
  border-radius: 1rem;
  width: 100%;
  padding: 2rem;
  margin-bottom: 10rem;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 2rem 6rem;
    width: 80%;
    margin-bottom: 10rem;
  }
`


export default Older;
