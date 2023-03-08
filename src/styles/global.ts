import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  html, body {
    background-color: ${props => props.theme.background};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    -webkit-font-smoothing: antialiased;
  }

  input {
    border-radius: 4px;
    background-color: ${props => props.theme["gray-100"]};

    :focus {
      border: 1px solid ${props => props.theme["yellow-700"]}
    }
  }

  button {
    border: 0;
  }
`;
