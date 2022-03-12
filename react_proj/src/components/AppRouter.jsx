import React from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Cart from '../pages/Cart'
import Books from '../pages/Books'
import DetailBook from '../pages/DetailBook'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import { useSelector } from "react-redux";

export const routes = {
    BOOKS: '/books',
    DETAIL_BOOK: '/books/:id',
    CART: 'cart',
    SIGNUP: 'signup',
    SIGNIN: 'signin'
}

const AppRouter = () => {
    const { isAuth } = useSelector(state => state.user)
    return (
        <Routes>
            {isAuth ?
                <>
                    <Route path={routes.BOOKS} element={<Books />} />
                    <Route path={routes.DETAIL_BOOK} element={<DetailBook />} />
                    <Route path={routes.CART} element={<Cart />} />
                    <Route path="*" element={<Navigate to={routes.BOOKS} />} />
                </>
                :
                <>
                    <Route path={routes.SIGNIN} element={<SignIn />} />
                    <Route path={routes.SIGNUP} element={<SignUp />} />
                    <Route path="*" element={<Navigate to={routes.SIGNIN} />} />
                </>
            }
        </Routes>
    )
}

export default AppRouter;