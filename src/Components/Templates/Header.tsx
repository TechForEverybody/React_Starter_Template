import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../Contexts/UserContext";
import { userContext } from "../../App";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {DehazeIcon,CloseIcon} from '../../Imports/Icons/IconImports';

function Header() {
    let { login } = useContext(userContext) as LoginContext;
    let [window_width, updateWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        updateWindowWidth(window.innerWidth);
    });
    let [toggleOptions, updateToggleOptions] = useState(false);
    let [toggleNavbar, updateToggleNavbar] = useState(false);



    return (
        <>
            <header>
                <DehazeIcon
                    className={`${window_width < 786 ? "display_flex" : "display_none"
                        }`}
                    onClick={() => {
                        updateToggleNavbar(true);
                    }}
                />
                <div className="header">
                    <h1>
                        <NavLink to="/">
                            Site_Name
                        </NavLink>
                    </h1>
                </div>
                <div className=""></div>
                <div className=""></div>
                <nav
                    className={`DesktopNav ${window_width > 786 ? "display_flex" : "display_none"}`}>
                    {login.user ? (
                        <>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/about"> About</NavLink>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <NavLink to="/references">References</NavLink>
                        </>
                    )}
                </nav>
                {login.user ? (
                    <>
                        <div className="user">
                            <div className="name"
                                onClick={() => {
                                    updateToggleOptions(!toggleOptions);
                                }}>
                                hello {login.username}
                            </div>
                            {toggleOptions ? (
                                <>
                                    <div className="options">
                                        <NavLink to="/account">
                                            <AccountCircleIcon /> Account
                                        </NavLink>
                                        <NavLink to="/logout">Logout</NavLink>
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <button>
                            <NavLink to="/login">Login</NavLink>
                        </button>
                    </>
                )}
                <nav
                    className={`MobileNav ${toggleNavbar ? "display_flex" : ""
                        }`}>
                    <CloseIcon
                        onClick={() => {
                            updateToggleNavbar(false);
                        }}
                    />
                    {login.user ? (
                        <>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/blogs">Blogs</NavLink>
                            <NavLink to="/references">References</NavLink>
                        </>
                    )}
                </nav>
            </header>
        </>
    );
}

export default Header;

// {
//     login.user ? (
//         <>

//         </>
//     ) : (
//         <>
//         </>
//     )
// }
