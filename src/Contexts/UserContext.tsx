let userInitialState = {
    user: false,
    username: "User",
}
type actionType={
    type:string,
    user:boolean,
    username:string|null
}
function updateUser(state:any, action:actionType) {
    if (action.type === "LOGIN") {
        return ({
            user: action.user,
            username: action.username,
        })
    }
    else if (action.type === "LOGOUT") {
        return ({
            user: action.user,
            username: action.username,
        })
    }
    return state;
}

export {userInitialState,updateUser}

export type LoginContext={
    login:{
        user:boolean,
        username:string
    };
    updateLoginState:(action:actionType)=>void;
}