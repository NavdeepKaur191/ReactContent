import { useState } from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>
    {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
        }
    <ThemeContext.Provider value={{
    theme,
    toggleTheme,
  }} >
{children}
</ThemeContext.Provider >}

export const useTheme = () => ({ theme,toggleTheme});
