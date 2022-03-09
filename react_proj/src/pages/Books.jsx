import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BooksList from '../components/BooksList';

const Books = () => {


    return (
        <Container>
            <Row className='d-flex justify-content-center mt-2'>
                <BooksList />
            </Row>
        </Container>
    );
};

export default Books;