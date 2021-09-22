import React from "react";
import { connect } from "react-redux";
import { fetchSingleUser } from "../store/SingleUser";

export class SingleUser extends React.Component {
	componentDidMount() {
		this.props.getSingleUser(this.props.match.params.id);
	}
	render() {
		const { user } = this.props;
		return (
			<div>
				{user.id ? (
					<div>
						<div>{user.id}</div>
						<div>{user.firstName + " " + user.lastName}</div>
						<div>{user.email}</div>
						<div>{user.shippingAddress}</div>
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
	users: state.user,
});

const mapDispatch = (dispatch) => ({
	getSingleUser: (id) => dispatch(fetchSingleUser(id)),
});

export default connect(mapState, mapDispatch(SingleUser));
