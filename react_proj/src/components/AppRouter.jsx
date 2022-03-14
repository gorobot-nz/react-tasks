import React from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Cart from '../pages/Cart'
import Books from '../pages/Books'
import DetailBook from '../pages/DetailBook'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import { useSelector } from "react-redux";
import AdminPage from "../pages/AdminPage";
import Orders from "../pages/Orders";

export const routes = {
    BOOKS: '/books',
    DETAIL_BOOK: '/books/:id',
    CART: 'cart',
    SIGNUP: 'signup',
    SIGNIN: 'signin',
    ADMIN: 'admin',
    ORDERS: 'orders',
}

const AppRouter = () => {
    const { user, isAuth } = useSelector(state => state.user)
    return (
        <Routes>
            {isAuth ?
                <>
                    <Route path={routes.BOOKS} element={<Books />} />
                    <Route path={routes.DETAIL_BOOK} element={<DetailBook />} />
                    <Route path={routes.CART} element={<Cart />} />
                    <Route path={routes.ORDERS} element={<Orders />} />
                    {
                        user.roleId === 2 ?
                            <Route path={routes.ADMIN} element={<AdminPage />} />
                            :
                            <></>
                    }
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