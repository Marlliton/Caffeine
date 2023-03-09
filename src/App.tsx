import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routers } from "./Routers";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
