import React, { useState } from "react";
import { Form, Button, Container, Card } from 'react-bootstrap'
import { signIn } from '../redux/user/async/asyncUserActions'
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    function submitForm(e) {
        e.preventDefault()
        dispatch(signIn(username, password))
    }

    return (
        <Container className='d-flex justify-content-center'>
            <Card className='mt-5' style={{ width: '50%' }}>
                <Card.Header as="h5">SignIn</Card.Header>
                <Card.Body>
                    <Form>
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
        </Container>
    )
}

export default SignIn