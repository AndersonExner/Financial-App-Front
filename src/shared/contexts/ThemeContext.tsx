import React, { useCallback, useContext, useMemo } from 'react';
import { DarkTheme, LightTheme } from '../Themes';
import { Box, ThemeProvider } from '@mui/material';

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContextData>({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

interface IAppThemeProviderProps {
    children: React.ReactNode;
};

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = React.useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light')
            return LightTheme;

        return DarkTheme;

    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme} >
                <Box width="100vw" height="100vh" padding={theme.spacing(2)} bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}