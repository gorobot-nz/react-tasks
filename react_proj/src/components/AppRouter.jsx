import React from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Basket from '../pages/Basket'
import Books from '../pages/Books'
import DetailBook from '../pages/DetailBook'

const routes = {
    BOOKS: '/books',
    DETAIL_BOOK: '/books/:id',
    BASKET: 'basket'
}

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.BOOKS} element={<Books />} />
            <Route path={routes.DETAIL_BOOK} element={<DetailBook />} />
            <Route path={routes.BASKET} element={<Basket />} />
            <Route path="*" element={<Navigate to={routes.BOOKS} />} />
        </Routes>
    )
}

export default AppRouter;