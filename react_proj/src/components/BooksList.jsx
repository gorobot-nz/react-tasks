import React from "react";
import { Row } from 'react-bootstrap'
import BookCard from "./BookCard";
import { useSelector } from "react-redux";

const BooksList = () => {
    const books = useSelector(state => state.books.books)

    return (
        <>
            {
                books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))
            }
        </>
    )
}

export default BooksList