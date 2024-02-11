import { UserLocalSettingsType } from "../../types/User"


export const defaultSettingsData: UserLocalSettingsType = {
    themeMode: "light",
    language: "english",
    themeScheme: 0,
}


export function getSettingsData(): UserLocalSettingsType | null {
    const settingsData = localStorage.getItem("settingsData")
    if (settingsData) {
        return JSON.parse(settingsData) as UserLocalSettingsType
    } else {
        return null
    }
}
export function setSettingsData(settingsData: UserLocalSettingsType): void {
    localStorage.setItem("settingsData", JSON.stringify(settingsData))
}
export function removeSettingsData(): void {
    localStorage.removeItem("settingsData")
}