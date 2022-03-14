const defaultState = {
    orders: [],
}

const SET_ORDERS = 'SET_ORDERS'


export const ordersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return { ...state, orders: action.payload}
        default:
            return state
    }
}

export const setOrdersAction = (payload) => ({ type: SET_ORDERS, payload })