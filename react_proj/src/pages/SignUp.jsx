import React, { useState } from 'react';
import { Form, Button, Container, Card, Toast, Row } from 'react-bootstrap'
import { signUp } from '../redux/user/async/asyncUserActions'
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const isError = useSelector(state => state.user.isError)

    function submitForm(e) {
        e.preventDefault()
        dispatch(signUp(username, password, name, surname))
        setShow(true)
    }

    return (
        <Container className='d-flex justify-content-center'>
            <Card className='mt-5' style={{ width: '50%' }}>
                <Card.Header as="h5">SignUp</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSurname">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Enter surname" value={surname} onChange={e => setSurname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={submitForm}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Sign up message</strong>
                </Toast.Header>
                <Toast.Body>
                    {isError ?
                        <>
                            Error
                        </>
                        :
                        <>
                            Success
                        </>
                    }
                </Toast.Body>
            </Toast>

        </Container>
    )
}

export default SignUp