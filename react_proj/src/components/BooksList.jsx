import React, { useEffect } from "react";
import { Row } from 'react-bootstrap'
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/async/asyncBooksActions";

const BooksList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

    const books = useSelector(state => state.books.books)

    console.log(books)


    return (
        <>
            {
                books?.map(book => (
                    <BookCard key={book.book.id} book={book} />
                ))
            }

        </>
    )
}

export default BooksList