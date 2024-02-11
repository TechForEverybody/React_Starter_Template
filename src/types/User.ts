export type AuthUserDataType = {
    id: string,
    name: string,
    contact: {
        type: "email" | "phone",
        value: string,
    },
    role: string,
    token: string,
    avatar:string
}

export type UserLocalSettingsType = {
    themeMode: "light" | "dark",
    themeScheme: 0 | 1 | 2 | 3,
    language:string,
}