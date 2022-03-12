import axios from "axios"

export const signUp = (username, password, name, surname) => {
    return function (dispatch) {
        axios.post('http://localhost:8080/auth/signup', {
            username: username,
            password: password,
            name: name,
            surname: surname
        })
        .then(responce => console.log(responce.data))
    }
}

export const signIn = (username, password) => {
    return function (dispatch) {
        axios.post('http://localhost:8080/auth/signin', {
            username: username,
            password: password,
        })
        .then(responce => console.log(responce.data))
    }
}
