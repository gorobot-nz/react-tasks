import React, { createRef, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addBook, editBook } from '../../redux/books/async/asyncBooksActions'

const BookForm = ({ b, isEdit }) => {
    b.date = b.date.slice(0, 4)

    const [book, setBook] = useState(b)

    const dispatch = useDispatch()

    const selectRef = createRef

    const authors = useSelector(state => state.authors.authors)

    const [authorId, setAuthorId] = useState(0)

    function handleChange(evt) {
        const value = evt.target.value;
        setBook({
            ...book,
            [evt.target.name]: value
        });
        console.log(book)
    }

    const handleClick = () => {
        if (isEdit) {
            dispatch(editBook(book))
        } else {
            dispatch(addBook(book, authorId))
        }
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
                <Form.Control type="text" placeholder="Enter available count" name='booksCount' value={book.booksCount} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' value={book.description} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter publishing year" name='date' value={book.date} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
                <Form.Label>Author</Form.Label>
                <Form.Select onChange={(e) => setAuthorId(Number(e.target.value))} aria-label="Default select example">
                    <option value='0' ref={selectRef}>Select author</option>
                    {
                        authors.map(author => (
                            <option key={author.author.id} value={author.author.id}>{author.author.name} {author.author.surname}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>

            <Button onClick={handleClick}>
                Add
            </Button>
        </Form>
    )
}

export default BookForm