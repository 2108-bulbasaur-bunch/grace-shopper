import axios from "axios";

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
		const res = await axios.get("api/users");

		return dispatch(getAllUsers(res.data));
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
