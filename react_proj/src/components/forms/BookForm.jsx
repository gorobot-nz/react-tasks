import React from 'react'
import { Form } from 'react-bootstrap'

const BookForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCount">
                <Form.Label>Count</Form.Label>
                <Form.Control type="text" placeholder="Enter available count" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter publishing year" />
            </Form.Group>
        </Form>
    )
}

export default BookForm