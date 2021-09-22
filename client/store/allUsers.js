import axios from "axios";

const TOKEN = "token";

//action type

const GET_ALL_USERS = "GET_ALL_USERS";

//action creator
const getAllUsers = (users) => {
	return {
		type: GET_ALL_USERS,
		users,
	};
};

//thunk
export const fetchAllUsers = () => async (dispatch) => {
	try {
		const token = window.localStorage.getItem(TOKEN);
		if (token) {
			const res = await axios.get("/api/users", {
				header: {
					authorization: token,
				},
			});

			return dispatch(getAllUsers(res.data));
		}
	} catch (error) {
		console.log(error);
	}
};

//reducer
export default function (state = [], action) {
	switch (action.type) {
		case GET_ALL_USERS:
			return action.users;

		default:
			return state;
	}
}
