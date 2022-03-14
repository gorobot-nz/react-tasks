import axios from "axios"
import { setBooksAction } from "../booksReducer"

export const fetchBooks = () => {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:8080/api/book', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        dispatch(setBooksAction(data.books))
    }
}

export const addBook = (book, authorId) => {
    return async function (dispatch) {
        const { data } = await axios.post(`http://localhost:8080/api/book`,
            {
                book: {
                    title: book.title,
                    booksCount: Number(book.booksCount),
                    description: book.description,
                    price: Number(book.price),
                    date: book.date
                },
                authors: [authorId]
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        dispatch(fetchBooks())
    }
}

export const deleteBook = (id) => {
    return async function (dispatch) {
        const { data } = await axios.delete(`http://localhost:8080/api/book/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        dispatch(fetchBooks())
    }
}

export const editBook = (book) => {
    return async function (dispatch) {
        const { data } = await axios.put(`http://localhost:8080/api/book/${book.id}`,
            {
                title: book.title,
                booksCount: Number(book.booksCount),
                description: book.description,
                price: Number(book.price),
                date: book.date
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        dispatch(fetchBooks())
    }
}