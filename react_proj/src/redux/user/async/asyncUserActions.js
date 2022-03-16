import axios from "axios"
import jwtDecode from "jwt-decode"
import { setUserAction, setIsAuthAction, setIsError } from "../userReducer"


export const signUp = (username, password, name, surname) => {
    return async function (dispatch) {
        try {
            const { status } = await axios.post('http://localhost:8080/auth/signup', {
                username: username,
                password: password,
                name: name,
                surname: surname
            })
            dispatch(setIsError(false))
        } catch (e) {
            dispatch(setIsError(true))
        }

    }
}

export const signIn = (username, password) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.post('http://localhost:8080/auth/signin', {
                username: username,
                password: password,
            })
            localStorage.setItem('token', data.token)
            const decodedData = jwtDecode(data.token)
            dispatch(setUserAction({
                id: decodedData.user_id,
                name: decodedData.user_name,
                surname: decodedData.user_surname,
                roleId: decodedData.user_role_id,
            }))
            dispatch(setIsAuthAction(true))
            dispatch(setIsError(false))
        } catch (e) {
            dispatch(setIsError(true))
        }
    }
}
