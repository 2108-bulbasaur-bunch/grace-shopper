import axios from "axios";

//action types
const SET_ORDERS = "SET_ORDERS";

//action creator
const setAllOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders,
  };
};

//thunk
export const fetchAllOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/orders/");
      dispatch(setAllOrders(data));
    } catch (err) {
      console.log(err);
    }
  };
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
