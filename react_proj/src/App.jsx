import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, useNavigate } from "react-router-dom";
import AppRouter, { routes } from "./components/AppRouter";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { setUserAction, setIsAuthAction } from './redux/user/userReducer'


function App() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            const decodedData = jwtDecode(localStorage.getItem('token'))
            dispatch(setUserAction({
                id: decodedData.user_id,
                name: decodedData.user_name,
                surname: decodedData.user_surname,
                roleId: decodedData.user_role_id,
            }))
            dispatch(setIsAuthAction(true))
            navigate(routes.BOOKS)
        } else {
            navigate(routes.SIGNIN)
        }
    }, [])

    return (
        <>
            <NavBar />
            <AppRouter />
        </>
    );
}

export default App;
