import React from "react";
import { connect } from "react-redux";
import AllProducts from "./AllProducts";

/**
 * COMPONENT
 */
export const Home = (props) => {
	const { firstName } = props;

	return (
		<div>
			<h3>Welcome, {firstName}</h3>
			<AllProducts />
		</div>

	);
};

/**
 * CONTAINER
 */
const mapState = (state) => {
	return {
		firstName: state.auth.firstName,
	};
};

export default connect(mapState)(Home);
