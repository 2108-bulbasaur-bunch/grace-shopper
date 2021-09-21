import axios from "axios";

const TOKEN = "token";

//action type

const GET_ALL_USERS = "GET_ALL_USERS";
const GET_SINGLE_USER = "GET_SINGLE_USER";

//action creator
const getAllUsers = (users) => {
	return {
		type: GET_ALL_USERS,
		users,
	};
};

const getSingleUser = (user) => {
	return {
		type: GET_SINGLE_USER,
		user,
	};
};

//thunk
export const fetchAllUsers = () => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN);
	if (token) {
		const res = await axios.get("api/users", {
			header: {
				authorization: token,
			},
		});

		return dispatch(getAllUsers(res.data));
	}
};

export const fetchSingleUser = (id) => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN);
	if (token) {
		const { data } = await axios.get(`api/users/${id}`, {
			header: {
				authorization: token,
			},
		});

		return dispatch(getSingleUser(data));
	}
};

//reducer
export default function (state = [], action) {
	switch (action.type) {
		case GET_ALL_USERS:
			return action.users;
		case GET_SINGLE_USER:
			return action.user;
		default:
			return state;
	}
}
