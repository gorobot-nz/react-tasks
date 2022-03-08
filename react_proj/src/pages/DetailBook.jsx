import React, { useState, useEffect } from 'react';
import { Container, Col, Image, Row, ListGroup, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCartAction } from '../redux/books/booksReducer';

const DetailBook = () => {
    const { id } = useParams()

    const book = useSelector(state => state.books.books.find(book => book.id === Number(id)))

    const dispatch = useDispatch()

    const addToCart = (book) => {
        dispatch(addToCartAction(book))
    }


    return (
        <Container className="mt-5">
            <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center'>
                    <Image width={300} height={540} src={book.img} />
                </Col>
                <Col>
                    <div>
                        Title: {book.title}
                    </div>
                    <div>
                        Price: {book.price}
                    </div>
                    <ListGroup className="mt-4">
                        {book.authors.map(author => (
                            <ListGroup.Item key={author}>
                                {author}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button className='mt-5' variant="primary" onClick={() => addToCart(book)}>
                        Add to cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailBook;