import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList';

const Books = () => {

    const {user} = useSelector(state => state.user)

    console.log(user)

    return (
        <Container>
            <Row className='d-flex justify-content-center mt-2'>
                <BooksList />
            </Row>
        </Container>
    );
};

export default Books;