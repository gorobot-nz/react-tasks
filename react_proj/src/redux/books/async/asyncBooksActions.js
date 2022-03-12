import axios from "axios"
import { setBooksAction } from "../booksReducer"

export const fetchBooks = () => {
    return function (dispatch) {
        axios.get('http://localhost:8080/api/book')
            .then(responce => dispatch(setBooksAction(responce.data.books)))
    }
}