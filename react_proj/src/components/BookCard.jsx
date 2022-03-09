import React from "react";
import { Card, Button } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";

const BookCard = ({ book }) => {

    const navigate = useNavigate()

    return (
        <Card className='m-4' style={{ width: '17rem' }}>
            <Card.Img width='100%' height='360px' className='mt-2' variant="top" src='https://images-na.ssl-images-amazon.com/images/I/81ww5rFJirL.jpg'/>
            <Card.Body>
                <Card.Title>{book.book.title}</Card.Title>
                <Card.Text>Price: {book.book.price}$</Card.Text>
                <Button variant='primary' onClick={() => navigate(`/books/${book.book.id}`)}>Details</Button>
            </Card.Body>
        </Card >
    )
}

export default BookCard