import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  padding: 0 10rem;
  
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  h1 {
    text-align: left;
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`