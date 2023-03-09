import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderActions = styled.div`
  display: flex;
  gap: 0.8rem;

  div {
    font-family: "Baloo 2", cursive;
    font-weight: 100;
    font-size: 0.9rem;
    background-color: ${props => props.theme["purple-200"]};
    color: ${props => props.theme["purple-800"]};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.5rem;

    border-radius: 6px;
    border: 1px solid ${props => props.theme["black-900"]};

    svg {
      color: ${props => props.theme["purple-600"]};
    }
  }

  button {
    position: relative;
    vertical-align: middle;
    line-height: 0;
    padding: 0.5rem;

    border: 2px solid transparent;
    border-radius: 6px;

    background-color: ${props => props.theme["yellow-200"]};
    color: ${props => props.theme["yellow-700"]};

    &:focus {
      border: 2px solid ${props => props.theme["yellow-700"]};
    }
  }
`;

export const CartAmount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;

  height: 1.25rem;
  width: 1.25rem;

  background-color: ${props => props.theme["yellow-700"]};
  color: ${props => props.theme.white};
`;
