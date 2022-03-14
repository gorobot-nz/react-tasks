import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../redux/orders/async/asyncOrdersReducers'
import { ListGroup, Table, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Orders = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const orders = useSelector(state => state.orders.orders)
    const user = useSelector(state => state.user.user)
    const books = useSelector(state => state.books.books)

    useEffect(() => {
        dispatch(fetchOrders(user.id))
    }, [])


    const getTitle = (id) => {
        return books.find(book => book.book.id === id).book.title
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Price</th>
                    <th>Books</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders?.map(order => (
                        <tr key={order.order.id}>
                            <td>{order.order.id}</td>
                            <td>{order.order.totalPrice}</td>
                            <td style={{width: '400px'}}>
                                <ListGroup>
                                    {order.books.map(bookId => (
                                        <ListGroup.Item key={bookId}>
                                            {
                                                getTitle(bookId)
                                            }
                                            <Button className='ms-5' onClick={() => navigate(`/books/${bookId}`)}>
                                                Visit
                                            </Button>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default Orders