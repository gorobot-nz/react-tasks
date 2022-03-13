import React, { useEffect } from "react";
import { Row } from 'react-bootstrap'
import BookCard from "./BookCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/async/asyncBooksActions";
import { fetchAuhtors } from "../redux/authors/async/asyncAuthorsActions";

const BooksList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks())
        dispatch(fetchAuhtors())
    }, [])

    const books = useSelector(state => state.books.books)
    const authors = useSelector(state => state.authors.authors)

    console.log(books)
    console.log(authors)


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