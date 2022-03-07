import React from "react";
import { Row } from 'react-bootstrap'
import BookCard from "./BookCard";

const BooksList = () => {

    const books = [
        {
            id: 1,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 2,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 3,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 4,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 5,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 6,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
        },
        {
            id: 7,
            title: 'boo',
            authors: [1, 2, 3],
            price: 129,
            img: "https://wallpapershome.ru/images/pages/pic_v/16158.jpg"
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