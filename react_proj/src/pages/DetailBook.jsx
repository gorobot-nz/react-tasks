import React, { useState, useEffect } from 'react';
import { Container, Col, Image, Row, ListGroup, Button, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../redux/books/async/asyncBooksActions';
import { addToCartAction } from '../redux/books/booksReducer';

const DetailBook = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

    const { id } = useParams()
    const book = useSelector(state => state.books.books.find(book => book.book.id === Number(id)))

    const addToCart = (book) => {
        dispatch(addToCartAction(book))
        setShow(true)
    }

    const [show, setShow] = useState(false)

    return (
        <Container className="mt-5">
            <Row className='d-flex justify-content-center'>
                <Col className='d-flex justify-content-center'>
                    <Image width={350} height={540} src='https://images-na.ssl-images-amazon.com/images/I/81ww5rFJirL.jpg' />
                </Col>
                <Col>
                    <div>
                        Title: {book?.book.title}
                    </div>
                    <div>
                        Description: {book?.book.description}
                    </div>
                    <div>
                        Price: {book?.book.price}$
                    </div>
                    <div>
                        Available books: {book?.book.booksCount}
                    </div>
                    <div className='mt-5'>
                        Author:
                    </div>
                    <ListGroup style={{ width: '200px' }}>
                        {book?.authors.map(author => (
                            <ListGroup.Item key={author.id}>
                                {author.name} {author.surname}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    {book.book.booksCount === 0 ?
                        <Button className='mt-5' variant="primary" disabled>
                            There are no books
                        </Button>
                        :
                        <Button className='mt-5' variant="primary" onClick={() => addToCart(book)}>
                            Add to cart
                        </Button>
                    }
                </Col>
            </Row>
            <Row className='mt-5'>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Cart Alert</strong>
                    </Toast.Header>
                    <Toast.Body>You are add {book.book.title} at cart</Toast.Body>
                </Toast>
            </Row>
        </Container>
    );
};

export default DetailBook;