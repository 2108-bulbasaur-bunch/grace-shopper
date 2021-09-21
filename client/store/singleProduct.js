import axios from "axios";

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product
  }
}

export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(setSingleProduct(data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateProductThunk = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/products/${product.id}, product`);
      dispatch(updateProduct(data));
    } catch (error) {
      console.log(error);
    }
  }


export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    case UPDATE_PRODUCT:
      return action.product
    default:
    return state;
  }
}
