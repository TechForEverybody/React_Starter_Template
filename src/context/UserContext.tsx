import { Dispatch, createContext, useEffect, useReducer } from "react"
import { getCookieUserData, removeCookieUserData, setCookieUserData } from "../services/CookieStorage/CookieAuthentication";
import { getLocalUserData, removeLocalUserData, setLocalUserData } from "../services/LocalStorage/LocalAuthentication";
export type userStateType = {
    isLogin: boolean,
    userData: {
        id: string | null,
        name: string | null,
        contact: {
            type: "email" | "phone",
            value: string
        } | null,
        avatar: string | null,
        role: string | null,
        token: string | null
    } | null
}

type userActionType = {
    type: "login" | "logout" | "update",
    value: {
        userData: userStateType["userData"] | null,
    }
}

const initialState: userStateType = {
    isLogin: false,
    userData: {
        id: null,
        name: null,
        contact: null,
        avatar: null,
        role: null,
        token: null
    }
}
function userReducer(state: userStateType, action: userActionType): userStateType {
    const user = {
        id: action.value.userData?.id as string,
        name: action.value.userData?.name as string,
        contact: action.value.userData?.contact as { type: "email" | "phone", value: string },
        role: action.value.userData?.role as string,
        token: action.value.userData?.token as string,
        avatar: action.value.userData?.avatar as string
    }
    console.log(user);
    switch (action.type) {
        case "login":
            setLocalUserData(user)
            setCookieUserData(user)
            return { ...state, isLogin: true, userData: action.value.userData || null }
        case "logout":
            removeCookieUserData()
            removeLocalUserData()
            return { ...state, isLogin: false, userData: action.value.userData || null }
        case "update":
            setLocalUserData(user)
            setCookieUserData(user)
            return { ...state, isLogin: true, userData: action.value.userData || null }
        default:
            return state
    }
}

export const UserContext = createContext({
    user: initialState,
    changeUser: ((() => { }) as Dispatch<userActionType>)
})




export default function UserContextProvider(props: {
    children: React.ReactNode
}) {
    const [user, changeUser] = useReducer(userReducer, initialState)
    function checkUser() {
        const cookie = getCookieUserData()
        const local = getLocalUserData()
        if (!!cookie) {
            changeUser({ type: "login", value: { userData: cookie, } })
        }
        else if (!!local) {
            changeUser({ type: "login", value: { userData: local } })
        }
        else {
            changeUser({ type: "logout", value: { userData: null } })
        }
    }
    useEffect(() => {
        checkUser()
    }, [])
    return (
        <UserContext.Provider value={{ user, changeUser }}>
            {props.children}
        </UserContext.Provider>
    )
}


