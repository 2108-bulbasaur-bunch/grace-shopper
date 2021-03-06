import axios from "axios";

const TOKEN = "token";

//action type
const GET_SINGLE_USER = "GET_SINGLE_USER";

//action creator
const getSingleUser = (user) => {
	return {
		type: GET_SINGLE_USER,
		user,
	};
};

//thunk
export const fetchSingleUser = (id) => async (dispatch) => {
	try {
		const token = window.localStorage.getItem(TOKEN);
		if (token) {
			const { data } = await axios.get(`/api/users/${id}`, {
				headers: {
					authorization: token,
				},
			});

			return dispatch(getSingleUser(data));
		}
	} catch (error) {
		console.log(error);
	}
};

//reducer
export default function (state = {}, action) {
	switch (action.type) {
		case GET_SINGLE_USER:
			return action.user;
		default:
			return state;
	}
}
