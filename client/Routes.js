import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import SingleUser from "./components/SingleUser";
import AllUsers from "./components/AllUsers";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import OrderHistory from "./components/OrderHistory";
import Cart from "./components/Cart";
import AllOrders from "./components/AllOrders";

/**
 * COMPONENT
 */
class Routes extends Component {
	componentDidMount() {
		this.props.loadInitialData();
	}

	render() {
		const { isLoggedIn } = this.props;

		return (
			<div>
				{isLoggedIn ? (
					<Switch>
						<Route path="/" component={Home} />
						{/* <Redirect to="/home" /> */}
						<Route exact path="/users" component={AllUsers} />
						<Route path="/users/:userId" component={SingleUser} />
						<Route path="/products/:productId" component={SingleProduct} />
						<Route exact path="/orders/" component={AllOrders} />
						<Route path="/orders/cart/:userId" component={Cart} />
						<Route path="/orders/:userId" component={OrderHistory} />
					</Switch>
				) : (
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />

						<Route exact path="/users" component={AllUsers} />
						<Route path="/users/:userId" component={SingleUser} />
						<Route path="/products/:productId" component={SingleProduct} />
					</Switch>
				)}
			</div>
		);
	}
}

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		// Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
		// Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
		isLoggedIn: !!state.auth.id,
	};
};

const mapDispatch = (dispatch) => {
	return {
		loadInitialData() {
			dispatch(me());
		},
	};
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
