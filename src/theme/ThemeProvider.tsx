import React, { useContext, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

import { color as ThemeColors } from "./index";
import { SettingContext } from "../context/SettingsContext";


type ConfiguredThemeProviderProps = {
    children?: React.ReactNode;
};

export default function ConfiguredThemeProvider(props: ConfiguredThemeProviderProps) {
    const { settings, changeSettings } = useContext(SettingContext)

    const [mode, setMode] = React.useState<"light" | "dark">(settings.themeMode);
    const [theme, setTheme] = React.useState<0 | 1 | 2 | 3>(settings.themeScheme);

    useEffect(() => {
        setMode(settings.themeMode)
        setTheme(settings.themeScheme)
    }, [settings.themeMode, settings.themeScheme])

    const _theme = React.useMemo(
        () => createTheme(ThemeColors[theme][mode] as ThemeOptions),
        [mode, theme]
    );

    return (
        <ThemeProvider theme={_theme}>
            <GlobalStyles styles={{}} />
            <CssBaseline enableColorScheme />
            {props.children}
        </ThemeProvider>
    );
}
