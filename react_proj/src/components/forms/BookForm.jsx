import React, { useState } from 'react'
import { Form, Button, Dropdown } from 'react-bootstrap'

const BookForm = () => {

    const [book, setBook] = useState({
        title: '',
        price: '',
        description: '',
        count: '',
        date: '',
    })

    const [auhtorId, setAuthorId] = useState(0)

    function handleChange(evt) {
        const value = evt.target.value;
        console.log(evt.target.name)
        console.log(value)
        setBook({
            ...book,
            [evt.target.name]: value
        });
    }

    const handleClick = () => {
        console.log(book)
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" name='title' value={book.title} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" name='price' value={book.price} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCount">
                <Form.Label>Count</Form.Label>
                <Form.Control type="text" placeholder="Enter available count" name='count' value={book.count} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' value={book.description} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter publishing year" name='date' value={book.date} onChange={handleChange} />
            </Form.Group>

            <Dropdown.Menu show>
                <Dropdown.Header>Auhtor</Dropdown.Header>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </Dropdown.Menu>

            <Button onClick={handleClick}>
                Add
            </Button>
        </Form>
    )
}

export default BookForm