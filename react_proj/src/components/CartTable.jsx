import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Image, Row, Modal, Toast } from 'react-bootstrap';
import { removeFromCartAction, setCartAction } from '../redux/books/booksReducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "axios";


const CartTable = () => {
    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const stripe = useStripe()
    const elements = useElements()

    const booksCart = useSelector(state => state.books.booksCart)
    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    useEffect(() => {

    }, [booksCart.lenght])

    const removeFromCart = (id) => {
        dispatch(removeFromCartAction(id))
        booksCart.filter(book => book.id !== id)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement('card')

        const { data: clientSecret } = await axios.post("http://localhost:8080/stripe/accept", {
            price: booksCart.reduce((init, curr) => init + curr.book.price, 0) * 100
        });

        const billingDetails = {
            name: user.name
        };

        const paymentMethodReq = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: billingDetails
        });

        setShow(false)

        if (paymentMethodReq.error) {
            console.log('paymentMethodErr', paymentMethodReq.error)
            return;
        }

        const { error } = await stripe.confirmCardPayment(clientSecret.id, {
            payment_method: paymentMethodReq.paymentMethod.id
        });

        if (error) {
            console.log('final error', error)
            return
        }
        dispatch(setCartAction([]))
        setShowToast(true)
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
                    {booksCart?.map(book => (
                        <tr key={book.book.id}>
                            <td>{book.book.id}</td>
                            <td>{book.book.title}</td>
                            <td><Image width={100} height={150} src='https://images-na.ssl-images-amazon.com/images/I/81ww5rFJirL.jpg' /></td>
                            <td>{book.book.price}$</td>
                            <td><Button onClick={() => { removeFromCart(book.book.id) }}>Удалить</Button></td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <Row className='ms-3'>
                                Total price: {booksCart.reduce((init, curr) => init + curr.book.price, 0)}$
                            </Row>
                            <Row className='ms-3'>
                                {
                                    booksCart.reduce((init, curr) => init + curr.book.price, 0) === 0
                                        ?
                                        <Button className='mt-2' style={{ width: '90%' }} variant='outline-success' disabled>Cart is empty</Button>

                                        :
                                        <Button className='mt-2' style={{ width: '90%' }} variant='outline-success' onClick={handleShow}>Buy</Button>
                                }
                            </Row>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Row>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Cart Alert</strong>
                    </Toast.Header>
                    <Toast.Body>Success payment</Toast.Body>
                </Toast>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apply Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardElement />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        {booksCart.reduce((init, curr) => init + curr.book.price, 0)}$
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartTable