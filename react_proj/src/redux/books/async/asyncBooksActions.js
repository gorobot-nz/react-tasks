import axios from "axios"
import { setBooksAction } from "../booksReducer"

export const fetchBooks = () => {
    return async function (dispatch) {
        const {data} = await axios.get('http://localhost:8080/api/book', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        dispatch(setBooksAction(data.books))
    }
}