import { AuthUserDataType } from '../../types/User'
import Cookies from 'universal-cookie'
import { jwtDecode } from 'jwt-decode';


export function getCookieUserData(): AuthUserDataType | null {
    const cookies = new Cookies()
    const token = cookies.get("token")    
    if (token) {
        const tokenValue = jwtDecode(token)
        if (tokenValue.exp && tokenValue.exp < Date.now() / 1000) return null
        else {
            const userData = cookies.get("userData") as AuthUserDataType
            if (userData && userData.token === token) return userData
            else return null
        }
    }
    else return null
}

export function setCookieUserData(userData: AuthUserDataType):void {
    const cookies = new Cookies()
    cookies.set("token", userData.token, { path: "/", expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) })
    cookies.set("userData", JSON.stringify(userData), { path: "/", expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) })
}

export function removeCookieUserData():void {
    const cookies = new Cookies()
    cookies.remove("token", { path: "/" })
    cookies.remove("userData", { path: "/" })
}