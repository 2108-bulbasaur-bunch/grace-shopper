import React from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../store/allUsers";

export class AllUsers extends React.Component {
	componentDidMount() {
		this.props.getAllUsers();
	}
	render() {
		const { allUsers } = this.props;
		return (
			<div>
				<h1>All Users</h1>
				<div>
					{!allUsers[0] ? (
						<h2>No Users</h2>
					) : (
						<div>
							{allUsers.map((user) => (
								<div>
									<div>{user.firstName}</div>
									<div>{user.lastName}</div>
									<div>{user.email}</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		allUsers: state.users,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getAllUsers: () => dispatch(fetchAllUsers()),
	};
};

export default connect(mapState, mapDispatch(AllUsers));
