import { createContext, useReducer, Dispatch, useEffect } from "react"
import { defaultSettingsData, getSettingsData, setSettingsData } from "../services/LocalStorage/LocalSettings"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export type SettingStateType = {
    themeMode: "light" | "dark",
    themeScheme: 0 | 1 | 2 | 3,
    screen: "desktop" | "tab" | "mobile",
    language: string
}
type SettingActionType = {
    type: "themeMode" | "screen" | "language" | "themeScheme",
    value: string | 0 | 1 | 2 | 3
}

function getInitialScreenWidth() {
    if (!!window) {
        if (window.innerWidth > 1200) return "desktop"
        if (window.innerWidth > 768) return "tab"
        if (window.innerWidth > 0) return "mobile"
    }
    return "desktop"
}

const initialState: SettingStateType = {
    themeMode: "light",
    themeScheme: 0,
    screen: getInitialScreenWidth(),
    language: "english"
}

function settingsReducer(state: SettingStateType, action: SettingActionType): SettingStateType {
    const currentSettingsData = getSettingsData() || defaultSettingsData
    switch (action.type) {
        case "themeMode":
            setSettingsData({ ...currentSettingsData, themeMode: action.value as typeof state.themeMode })
            return { ...state, themeMode: action.value as typeof state.themeMode }
        case "screen":
            return { ...state, screen: action.value as typeof state.screen }
        case "language":
            const currentSettings = getSettingsData() || defaultSettingsData
            setSettingsData({ ...currentSettings, language: action.value as string })
            return { ...state, language: action.value as string }
        case "themeScheme":
            setSettingsData({ ...currentSettingsData, themeScheme: action.value as typeof state.themeScheme })
            return { ...state, themeScheme: action.value as typeof state.themeScheme }
        default:
            return state
    }
}

export const SettingContext = createContext({
    settings: initialState,
    changeSettings: (() => { }) as Dispatch<SettingActionType>,
    toggleTheme: () => { },
    changeThemeScheme: () => { }
})

export default function SettingContextProvider(props: {
    children: React.ReactNode
}) {
    const [settings, changeSettings] = useReducer(settingsReducer, initialState)

    function checkSettings() {
        const settingData = getSettingsData()
        if (settingData) {
            changeSettings({ type: "language", value: settingData.language })
            changeSettings({ type: "themeMode", value: settingData.themeMode })
            changeSettings({ type: "themeScheme", value: settingData.themeScheme })
        } else {
            setSettingsData(initialState)
        }
    }
    useEffect(() => {
        checkSettings()
    }, [])
    function toggleTheme() {
        const currentSettingsData = getSettingsData() || defaultSettingsData
        changeSettings({ type: "themeMode", value: settings.themeMode === "light" ? "dark" : "light" })
        setSettingsData({ ...currentSettingsData, themeMode: settings.themeMode === "light" ? "dark" : "light" })
    }
    function changeThemeScheme() {
        const currentSettingsData = getSettingsData() || defaultSettingsData
        changeSettings({ type: "themeScheme", value: (settings.themeScheme + 1) % 4 as typeof settings.themeScheme })
        setSettingsData({ ...currentSettingsData, themeScheme: (settings.themeScheme + 1) % 4 as typeof settings.themeScheme })
    }
    return (
        <SettingContext.Provider value={{ settings, changeSettings, toggleTheme, changeThemeScheme }}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={settings.themeMode === "dark" ? "dark" : "colored"}
            />
            {props.children}
        </SettingContext.Provider>
    )
}





// usage:
// import { useContext } from "react"
// import { SettingContext } from "../context/SettingsContext"
// const { settings, changeSettings } = useContext(SettingContext)
// changeSettings({ type: "themeMode", value: "dark" })
// changeSettings({ type: "screen", value: "desktop" })
// changeSettings({ type: "language", value: "english" })
// console.log(settings.themeMode) // dark
// console.log(settings.screen) // desktop


