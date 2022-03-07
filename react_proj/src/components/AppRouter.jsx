import React from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Cart from '../pages/Cart'
import Books from '../pages/Books'
import DetailBook from '../pages/DetailBook'

export const routes = {
    BOOKS: '/books',
    DETAIL_BOOK: '/books/:id',
    CART: 'cart'
}

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.BOOKS} element={<Books />} />
            <Route path={routes.DETAIL_BOOK} element={<DetailBook />} />
            <Route path={routes.CART} element={<Cart />} />
            <Route path="*" element={<Navigate to={routes.BOOKS} />} />
        </Routes>
    )
}

export default AppRouter;