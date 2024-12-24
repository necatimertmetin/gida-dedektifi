import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import { TabbedInterface } from "./components/layout/tabbed-interface/TabbedInterface";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { LightTheme, DarkTheme } from "./theme"; // Import themes
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Choose the theme based on darkMode state
  const theme = darkMode ? DarkTheme : LightTheme;

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <TabbedInterface />
    </ThemeProvider>
  );
}

export default App;
