import React, { useState, useEffect } from 'react';
import { Container, Col, Image, Row, ListGroup, Button, Alert, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCartAction } from '../redux/books/booksReducer';

const DetailBook = () => {
    const { id } = useParams()

    const book = useSelector(state => state.books.books.find(book => book.book.id === Number(id)))

    const dispatch = useDispatch()

    const addToCart = (book) => {
        dispatch(addToCartAction(book))
    }

    return (
        <Container className="mt-5">
            <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center'>
                    <Image width={350} height={540} src='https://images-na.ssl-images-amazon.com/images/I/81ww5rFJirL.jpg' />
                </Col>
                <Col>
                    <div>
                        Title: {book.book.title}
                    </div>
                    <div>
                        Description: {book.book.description}
                    </div>
                    <div>
                        Price: {book.book.price}$
                    </div>
                    <div className='mt-5'>
                        Author:
                    </div>
                    <ListGroup style={{width: '200px'}}>
                        {book.authors.map(author => (
                            <ListGroup.Item key={author.id}>
                                {author.name} {author.surname}
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