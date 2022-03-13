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

    const [show, setShow] = useState(false);
    const [formType, setFormType] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }

    const handleAddAuthor = () => {
        setFormType('add-author')
        setShow(true)
        dispatch(fetchAuhtors())
    }

    const handleAddBook = () => {
        setFormType('add-book')
        setShow(true)
    }

    const handleEditBook = (id) => {

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
                                            <Button>Edit</Button>
                                            <Button className="ms-3" onClick={() => { handleDelete(book.book.id) }}>Delete</Button>
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
                    {formType === 'add-book' ?
                        <BookForm />
                        :
                        <AuthorForm />
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default AdminPage