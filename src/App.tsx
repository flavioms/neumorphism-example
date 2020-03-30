import React, { useRef, useCallback } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistededState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const divClip = useRef<HTMLDivElement>(null);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    if (theme.title === "light") {
      divClip.current?.classList.add("anim");
    } else {
      divClip.current?.classList.remove("anim");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <div className="clip" ref={divClip}></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
