import { ThemeProvider } from "styled-components";
import { DefaultLayout } from "./layout";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  );
}
