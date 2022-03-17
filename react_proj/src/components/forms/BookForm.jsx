import React, { createRef, useState, useEffect } from 'react'
import { Form, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addBook, editBook } from '../../redux/books/async/asyncBooksActions'

const BookForm = ({ b, isEdit }) => {
    b.date = b.date.slice(0, 4)

    const [book, setBook] = useState(b)

    const dispatch = useDispatch()

    const authors = useSelector(state => state.authors.authors)

    const [authorIds, setAuthorIds] = useState([0])

    function addAuthor() {
        setAuthorIds([...authorIds, 0])
        console.log(authorIds)
    }

    function removeAuthor(index) {
        if (authorIds.length === 1) {
            return
        }
        setAuthorIds(authorIds.splice(index, 1))
        console.log(authorIds)
    }

    function changeAuhtor(id, index) {
        authorIds[index] = id
        setAuthorIds(authorIds)
        console.log(authorIds)
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setBook({
            ...book,
            [evt.target.name]: value
        });
        console.log(book)
    }

    const handleClick = () => {
        console.log('click')
        if (isEdit) {
            dispatch(editBook(book))
        } else {
            if (authorIds.length === 0 || authorIds.indexOf(0) !== -1) {
                console.log('bruh')
                return
            }
            dispatch(addBook(book, authorIds))
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
            {
                isEdit
                    ?
                    <></>
                    :
                    <Form.Group className="mb-3" controlId="formBasicAuthor">
                        <Form.Label>Authors</Form.Label>

                        {
                            authorIds.map((item, index) => (
                                <Row key={index}>
                                    <Form.Select className='mt-2 ms-2' onChange={(e) => changeAuhtor(Number(e.target.value), index)} aria-label="Default select example"
                                        style={{ width: '350px' }}>
                                        <option value='0'>Select author</option>
                                        {
                                            authors.map(author => (
                                                <option key={author.author.id} value={author.author.id}>{author.author.name} {author.author.surname}</option>
                                            ))
                                        }
                                    </Form.Select>
                                    <Button className='mt-2 ms-3' style={{ width: '100px' }} onClick={() => { removeAuthor(index) }}>Remove</Button>
                                </Row>
                            ))
                        }

                        <Row className='d-flex flex-row mt-3 justify-content-around'>
                            <Button style={{ width: '100px' }} onClick={addAuthor}>Add</Button>
                        </Row>
                    </Form.Group>
            }
            <Button onClick={handleClick}>
                Add
            </Button>
        </Form>
    )
}

export default BookForm