import { setBooksAction } from "../booksReducer"

export const fetchBooks = () => {
    return function (dispatch) {
        fetch('http://localhost:8080/api/book')
            .then(responce => responce.json())
            .then(json => dispatch(setBooksAction(json.books)))
    }
}