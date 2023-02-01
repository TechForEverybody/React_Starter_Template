import './App.css';
import './Styles/index.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorPage from './Components/Templates/ErrorPage';
import { createContext, useReducer } from 'react';
import { userInitialState, updateUser, LoginContext } from './Contexts/UserContext';
import Logout from './Components/Templates/Logout';
import Login from './Components/Login/Login';
let userContext = createContext<LoginContext | null>(null)
function App() {
    let [login, updateLoginState] = useReducer(updateUser, userInitialState);
    return (
            <userContext.Provider value={{ login, updateLoginState }}>
                <Routes>
                    <Route path="/" element={<Home />}/>



                    <Route path="/login" element={!login.user?<Login />:<Navigate to="/"/>}/>



                    <Route path="/logout" element={login.user?<Logout />:<Navigate to="/login"/>}/>

                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
            </userContext.Provider>
    );
}
export default App;
export { userContext }
