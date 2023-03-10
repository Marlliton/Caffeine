import styled from "styled-components";


interface ButtonAction {
  cart?: boolean
}

export const CoffeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  padding: 1rem 0.63rem;
  max-width: 16rem;

  h2 {
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    padding-top: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.theme["brown-300"]};
  }

  img {
    width: 7.5rem;
    padding-bottom: 0.8rem;
  }
`;
export const CoffeeBadge = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.theme["yellow-200"]};
  color: ${props => props.theme["yellow-700"]};
  font-size: 0.63rem;
  border-radius: 9999px;

  font-weight: bold;
`;

export const BadgeWrapper = styled.div`
  display: inline;
`

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between !important;
  width: 100%;

  div:first-of-type {
    font-family: "Baloo 2", cursive;
    font-size: 1.5rem;

    span {
      background-color: transparent;
      font-size: .9rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
    }
  }

  padding-top: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;
    

    span {
      background-color: ${props => props.theme["gray-200"]};
      border-radius: 0.5rem;
      /* padding: 0.5rem 0.8rem; */

      display: flex;
      align-items: center;
      svg {
        color: ${props => props.theme["purple-800"]};
        line-height: 0;
        font-size: 0;
      }
    }
  }
`;

export const ButtonAction = styled.button<ButtonAction>`
  background-color: ${props => props.cart ? props.theme["purple-800"] : "transparent"};
  color: ${props => props.cart && props.theme["gray-200"] };
  border: 0;
  outline: none;
  
  cursor: pointer;

  padding: .5rem;

  border-radius: 6px;


`;
