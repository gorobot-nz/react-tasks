import axios from "axios"
import { setOrdersAction } from "../ordersReducer"


export const fetchOrders = (id) => {
    return async function(dispatch) {
        const {data} = await axios.get(`http://localhost:8080/api/order/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        dispatch(setOrdersAction(data.orders))
    }
}

export const addOrder = (userId, totalPrice, books) => {
    return async function (dispatch) {
        const { data } = await axios.post(`http://localhost:8080/api/order`,
            {
                order: {
                    userId: userId,
                    totalPrice: totalPrice
                },
                books: books
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
        dispatch(fetchOrders(userId))
    }
}