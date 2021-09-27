import axios from "axios";

//action type
const SET_ORDER_HISTORY = "SET_ORDER_HISTORY";
const CREATE_CART = "CREATE_CART";

//action creator
const set_order_history = (orders) => {
	return {
		type: SET_ORDER_HISTORY,
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
export const fetchOrderHistory = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/api/orders/${userId}`);
			dispatch(set_order_history(data));
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
		case SET_ORDER_HISTORY:
			return action.orders;
		case CREATE_CART:
			return [...state, action.order];
		default:
			return state;
	}
}
