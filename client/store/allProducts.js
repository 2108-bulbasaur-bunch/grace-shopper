import axios from "axios";

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
}

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const addProductThunk = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/products', product);
      dispatch(addProduct(data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteProductThunk = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/products/${id}`);
      dispatch(deleteProduct(data));
    } catch (error) {
      console.log(error);
    }
  }
}


export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case ADD_PRODUCT:
      return [...state, action.product];
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id)
    default:
      return state;
  }
}
