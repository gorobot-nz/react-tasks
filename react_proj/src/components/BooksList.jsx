import React from "react";
import { Row } from 'react-bootstrap'
import BookCard from "./BookCard";

const BooksList = () => {

    const books = [
        {
            id: 1,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129
        },
        {
            id: 2,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129
        },
        {
            id: 3,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129
        },
        {
            id: 4,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129
        },
        {
            id: 5,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129
        },
        {
            id: 6,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129
        },
        {
            id: 7,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129
        },
    ]

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