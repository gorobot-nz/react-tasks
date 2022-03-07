import React from 'react';
import { Container, Col, Image, Row, ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailBook = () => {
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

    const { id } = useParams()

    const book = books[id - 1]

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
                            <ListGroup.Item>
                                {author}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button className='mt-5' variant="primary">
                        Add to cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailBook;