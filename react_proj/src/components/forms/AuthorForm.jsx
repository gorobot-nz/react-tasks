import React from 'react'
import { Form } from 'react-bootstrap'

const AuthorForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter author name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter author surname" />
            </Form.Group>
        </Form>
    )
}

export default AuthorForm