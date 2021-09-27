import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
	<div>
		<h1>Bulbasaur's Bake Shop</h1>
		<nav>
			{isLoggedIn ? (
				<div>
					{/* The navbar will show these links after you log in */}
					<Link to="/">Home</Link>
					{/* The below is currently broken; have to figure out how to pull in userId from props to get user profile and cart */}
					<Link to="/users/">Your Profile</Link>
					<Link to="/orders/cart">Your Cart</Link>
					<a href="#" onClick={handleClick}>
						Logout
					</a>
				</div>
			) : (
				<div>
					{/* The navbar will show these links before you log in */}
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/signup">Sign Up</Link>
					<Link to="/orders/cart">Your Cart</Link>
				</div>
			)}
		</nav>
		<hr />
	</div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		isLoggedIn: !!state.auth.id,
	};
};

const mapDispatch = (dispatch) => {
	return {
		handleClick() {
			dispatch(logout());
		},
	};
};

export default connect(mapState, mapDispatch)(Navbar);
