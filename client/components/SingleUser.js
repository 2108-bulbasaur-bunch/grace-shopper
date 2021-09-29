import React from "react";
import { connect } from "react-redux";
import { fetchSingleUser } from "../store/oneUser";

export class SingleUser extends React.Component {
	componentDidMount() {
		this.props.getSingleUser(this.props.match.params.userId);
	}
	render() {
		const { user } = this.props;

		return (
			<div>
				<h1>User infomation</h1>
				{user ? (
					<div className="user-details">
						<div>Name: {user.firstName + " " + user.lastName}</div>
						<div>Email: {user.email}</div>
						<div>Shipping Address:{user.shippingAddress}</div>
						<div>{user.isAdmin ? <div>admin</div> : <div />}</div>
					</div>
				) : (
					<div>Loading</div>
				)}
			</div>
		);
	}
}

const mapState = (state) => ({
	user: state.singleUser,
});

const mapDispatch = (dispatch) => ({
	getSingleUser: (id) => dispatch(fetchSingleUser(id)),
});

export default connect(mapState, mapDispatch)(SingleUser);
