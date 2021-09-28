import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../store";
import SingleUser from "./SingleUser";

const Navbar = ({ handleClick, isLoggedIn, userId }) => (
	<div>
		<h1>Bulbasaur's Bake Shop</h1>
		<nav>
			{isLoggedIn ? (
				<div>
					{/* The navbar will show these links after you log in */}
					<Link to="/">Home</Link>
					{/* the below isn't working because you have to make sure that the get single user is still being called*/}
					<Link to={`/users/${userId}`}>Your Profile</Link>
					<Link to={`/orders/cart/${userId}`}>Your Cart</Link>
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
					{/*THE BELOW NEEDS TO BE ADJUSTED FOR GUEST STILL*/}
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
		userId: state.auth.id
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
