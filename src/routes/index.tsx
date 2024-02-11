import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { routes } from './routes'
import Home from '../pages/Home/index'

function Router() {
    return (
        <Routes>
            <Route path={routes.ROOT} element={<Home />} />
            <Route path={routes.ABOUT} element={<div>About</div>} />
            <Route path={routes.CONTACT} element={<div>Contact</div>} />
            <Route path={routes.LOGIN} element={<div>Login</div>} />
            <Route path={routes.REGISTER} element={<div>Register</div>} />
            <Route path={routes.PROFILE.ROOT} element={<div>Profile</div>} />
            <Route path={routes.PROFILE.EDIT} element={<div>Edit Profile</div>} />
            <Route path={routes.PRODUCT.ROOT} element={<div>Product</div>} />
            <Route path={routes.PRODUCT.DETAIL} element={<div>Product Detail</div>} />
            <Route path={routes.NOTFOUND} element={<div>Not Found</div>} />
            <Route path={routes.WILDCARD} element={<Navigate to={routes.NOTFOUND} replace={true} />} />
        </Routes>
    )
}

export default Router