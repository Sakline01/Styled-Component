import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();
const Themecontextprovider = ({ children }) => {
    const [isDark, setIsDark] = useState("light");
    const [isChecked, setIsChecked] = useState(false);
    const handleDark = () => {
        isDark === "light" ? setIsDark("dark") : setIsDark("light");
    }
    const value = { isChecked, setIsChecked, isDark, handleDark };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export default Themecontextprovider;