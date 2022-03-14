import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Table, Image, Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BookForm from "../components/forms/BookForm";
import AuthorForm from "../components/forms/AuthorForm";
import { deleteBook } from "../redux/books/async/asyncBooksActions"
import { fetchAuhtors } from "../redux/authors/async/asyncAuthorsActions";

const AdminPage = () => {
    const books = useSelector(state => state.books.books)
    const dispatch = useDispatch()

    const [book, setBook] = useState({
        title: '',
        price: '',
        description: '',
        booksCount: '',
        date: '',
    })
    const [author, setAuthor] = useState({
        name: '',
        surname: '',
    })

    const [isEdit, setIsEdit] = useState(false)

    const [show, setShow] = useState(false);
    const [formType, setFormType] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

    const handleAddAuthor = () => {
        setFormType('add-author')
        setAuthor({
            name: '',
            surname: '',
        })
        handleShow()
    }

    const handleAddBook = () => {
        setFormType('add-book')
        setIsEdit(false)
        setBook({
            title: '',
            price: '',
            description: '',
            booksCount: '',
            date: '',
        })
        handleShow()
    }

    const handleEditBook = (book) => {
        setFormType('edit-book')
        setIsEdit(true)
        setBook(book.book)
        handleShow()
    }

    return (
        <Container className="mt-5">
            <Row md={24}>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item onClick={handleAddAuthor}>Add author</ListGroup.Item>
                        <ListGroup.Item onClick={handleAddBook}>Add book</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Count</th>
                                <th>Year</th>
                                <th>Authors</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                books?.map(book => (
                                    <tr key={book.book.id}>
                                        <td>{book.book.id}</td>
                                        <td>{book.book.title}</td>
                                        <td><Image width={100} height={150} src='https://images-na.ssl-images-amazon.com/images/I/81ww5rFJirL.jpg' /></td>
                                        <td>{book.book.price}</td>
                                        <td>{book.book.booksCount}</td>
                                        <td>{book.book.date.slice(0, 4)}</td>
                                        <td>
                                            <ListGroup>
                                                {book?.authors.map(author => (
                                                    <ListGroup.Item key={author.id}>
                                                        {author.name} {author.surname}
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </td>
                                        <td>
                                            <Button onClick={() => { handleEditBook(book) }}>Edit</Button>
                                            <Button className="ms-3" onClick={() => { handleDeleteBook(book.book.id) }}>Delete</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {formType === 'add-book' || formType === 'edit-book' ?
                        <BookForm b={book} isEdit={isEdit} />
                        :
                        <AuthorForm a={author} />
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default AdminPage