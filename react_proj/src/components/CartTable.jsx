import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Image, Row, Modal } from 'react-bootstrap';
import { removeFromCartAction } from '../redux/books/booksReducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CartTable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const stripe = useStripe()
    const elements = useElements()

    const booksCart = useSelector(state => state.books.booksCart)
    console.log(booksCart)


    const dispatch = useDispatch()

    useEffect(() => {

    }, [booksCart.lenght])

    const removeFromCart = (id) => {
        dispatch(removeFromCartAction(id))
        booksCart.filter(book => book.id !== id)
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Book Title</th>
                        <th>Img</th>
                        <th>Book Price</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {booksCart.map(book => (
                        <tr key={book.book.id}>
                            <td>{book.book.id}</td>
                            <td>{book.book.title}</td>
                            <td><Image width={100} height={150} src='https://images-na.ssl-images-amazon.com/images/I/81ww5rFJirL.jpg' /></td>
                            <td>{book.book.price}</td>
                            <td><Button onClick={() => { removeFromCart(book.book.id) }}>Удалить</Button></td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <Row className='ms-3'>
                                Total price: {booksCart.reduce((init, curr) => init + curr.book.price, 0)}
                            </Row>
                            <Row className='ms-3'>
                                <Button className='mt-2' style={{ width: '90%' }} variant='outline-success' onClick={handleShow}>Buy</Button>
                            </Row>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apply Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardElement />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        {booksCart.reduce((init, curr) => init + curr.book.price, 0)}$
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartTable