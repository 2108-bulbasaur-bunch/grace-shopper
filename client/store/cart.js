import axios from "axios";

//action type
const SET_ORDERS = "SET_ORDERS";
const CREATE_CART = "CREATE_CART";

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";
const CHECKOUT = "CHECKOUT";

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
const update_item = (item) => {
	return {
		type: UPDATE_ITEM,
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

export const fetchOrders = () => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get("/api/orders");
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

export const addItemThunk = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.post(`/api/orders/cart/${userId}`);
			dispatch(add_item(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteItemThunk = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(`/api/orders/cart/${userId}`);
			dispatch(delete_item(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateItemThunk = (userId) => {
	return async (dispatch) => {
		try {
			const { data } = await axios.put(`/api/orders/cart/${userId}`);
			dispatch(update_item(data));
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
