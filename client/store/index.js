import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import allUsers from "./users";
import singleUser from "./oneUser";
import singleProduct from "./oneProduct";
import allProducts from "./products";
import orders from "./orders";
import cart from "./cart";
import adminOrders from "./adminOrders";

const reducer = combineReducers({
	auth,
	allUsers,
	singleUser,
	singleProduct,
	allProducts,
	cart,
	orders,
	adminOrders,
});
const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
