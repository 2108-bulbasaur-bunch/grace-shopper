import axios from "axios";

//action types
const SET_ORDERS = "SET_ORDERS";
const TOKEN = "token";

//action creator
const setAllOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders,
  };
};

//thunk
//YOU MUST HAVE TOKEN AUTH ANYTIME YOU HAVE AN AXIOS CALL TO AN API THAT REQUIRES LOGIN!
export const fetchAllOrders = () => async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const res = await axios.get("/api/orders/", {
          headers: {
            authorization: token,
          },
        });
      dispatch(setAllOrders(res.data));
    }
     } catch (err) {
    console.log(err);
  }
};

//reducer
export default function (state = [], action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
