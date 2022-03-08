import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Image, Row, Modal } from 'react-bootstrap';
import { removeFromCartAction } from '../redux/books/booksReducer';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CartTable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const stripe = useStripe()
    const elements = useElements()

    const booksCart = useSelector(state => state.books.booksCart)

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
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td><Image width={50} height={100} src={book.img} /></td>
                            <td>{book.price}</td>
                            <td><Button onClick={() => { removeFromCart(book.id) }}>Удалить</Button></td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <Row className='ms-3'>
                                Total price: {booksCart.reduce((init, curr) => init + curr.price, 0)}
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
                    <CardElement/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartTable