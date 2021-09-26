import axios from "axios";

//action type
const SET_ORDERS = "SET_ORDERS";
const CREATE_CART = "CREATE_CART";

//action creator
const set_orders = (orders) => {
	return {
		type: SET_ORDERS,
		orders,
	};
};

const create_cart = (order) => {
	return {
		type: CREATE_CART,
		order,
	};
};

//thunk creator

//order history by userId
export const fetchOrders = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/api/orders/${userId}`);
			dispatch(set_orders(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const createCartThunk = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`/api/orders/${userId}`);
			dispatch(create_cart(data));
		} catch (error) {
			console.log(error);
		}
	};
};

//reducer
export default function cartReducer(state = [], action) {
	switch (action.type) {
		case SET_ORDERS:
			return action.orders;
		case CREATE_CART:
			return [...state, action.order];
		default:
			return state;
	}
}
