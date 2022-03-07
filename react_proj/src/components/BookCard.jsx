import React from "react";
import { Card, Col } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";

const BookCard = ({ book }) => {

    const navigate = useNavigate()

    return (
        <Card className='m-4' style={{ width: '17rem' }}>
            <Card.Img className='mt-2' variant="top" src="https://i.ytimg.com/vi/RmRM5sYRMgY/maxresdefault.jpg" />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Price: {book.price}$</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link onClick={() => navigate(`/books/${book.id}`)}>Details</Card.Link>
            </Card.Body>
        </Card >
    )
}

export default BookCard