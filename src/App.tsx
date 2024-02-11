import React from 'react';
import './App.css';
import './styles/index.scss';
import SettingContextProvider from './context/SettingsContext';
import UserContextProvider from './context/UserContext';
import Router from './routes';
import { HelmetProvider } from 'react-helmet-async';
import { StyledEngineProvider } from "@mui/material/styles";
import ConfiguredThemeProvider from "./theme/ThemeProvider";
import PreviewProvider from './context/PreviewContext';

function App() {
    return (

        <HelmetProvider>
            <SettingContextProvider>
                <UserContextProvider>
                    <ConfiguredThemeProvider>
                        <StyledEngineProvider injectFirst>
                            <PreviewProvider>
                                <Router />
                            </PreviewProvider>
                        </StyledEngineProvider>
                    </ConfiguredThemeProvider>
                </UserContextProvider>
            </SettingContextProvider>
        </HelmetProvider>
    );
}

export default App;