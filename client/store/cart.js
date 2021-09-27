import axios from "axios";

//action type
const GET_CART = "GET_CART";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_QTY = "UPDATE_QTY";
const CHECKOUT = "CHECKOUT";

//action creator
const get_cart = (cart) => {
	return {
		type: GET_CART,
		cart,
	};
};

const add_item = (item) => {
	return {
		type: ADD_ITEM,
		item,
	};
};

const delete_item = (item) => {
	return {
		type: DELETE_ITEM,
		item,
	};
};
const update_qty = (item) => {
	return {
		type: UPDATE_QTY,
		item,
	};
};
const checkout = (order) => {
	return {
		type: CHECKOUT,
		order,
	};
};

//thunk creator
export const addItemThunk = (userId, body, history) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`/api/orders/cart/${userId}`, body);
			dispatch(add_item(data));
			// history.push("/");
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteItemThunk = (userId, body, history) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(`/api/orders/cart/${userId}`, {
				headers: {
					"Content-Type": "application/json",
				},
				data: body,
			});
			dispatch(delete_item(data));
			// history.push("/");
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateQtyThunk = (userId, body, history) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.put(`/api/orders/cart/${userId}`, body);
			dispatch(update_qty(data));
			// history.push(`/orders/cart/${userId}`);
		} catch (error) {
			console.log(error);
		}
	};
};

export const checkoutThunk = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.put(`/api/orders/${userId}`);
			dispatch(checkout(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchCartThunk = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get(`/api/orders/cart/${userId}`);
			dispatch(get_cart(data));
		} catch (error) {
			console.log(error);
		}
	};
};

//reducer
export default function cartReducer(state = [], action) {
	switch (action.type) {
		case GET_CART:
			return action.cart;
		case ADD_ITEM:
			return action.item;
		case DELETE_ITEM:
			return state.filter((item) => item.productId !== action.item.productId);
		case UPDATE_QTY:
			return [...state, state.action];
		default:
			return state;
	}
}
