import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import allUsers from "./allUsers";
import singleUser from "./singleUser";
import singleProduct from "./singleProduct";
import allProducts from "./allProducts";

const reducer = combineReducers({ auth, allUsers, singleUser, singleProduct, allProducts });
const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
