import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addAuthor } from '../../redux/authors/async/asyncAuthorsActions'

const AuthorForm = ({ a }) => {
    const [author, setAuthor] = useState(a)

    const dispatch = useDispatch()

    function handleChange(evt) {
        const value = evt.target.value;
        setAuthor({
            ...author,
            [evt.target.name]: value
        });
    }

    const handleClick = () => {
        dispatch(addAuthor(author))
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter author name" name='name' value={author.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Enter author surname" name='surname' value={author.surname} onChange={handleChange} />
            </Form.Group>

            <Button onClick={handleClick}>
                Add
            </Button>
        </Form>
    )
}

export default AuthorForm