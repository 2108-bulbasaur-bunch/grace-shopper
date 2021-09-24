import React from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../store/users";
import { Link } from "react-router-dom";

export class AllUsers extends React.Component {
	componentDidMount() {
		this.props.getAllUsers();
	}
	render() {
		const { allUsers } = this.props;
		console.log("USERS", allUsers)
		return (
			<div>
				<h1>UserList</h1>
				<div>
					{!allUsers[0] ? (
						<h2>No Users</h2>
					) : (
						<div>
							{allUsers.map((user) => (
								<Link to={`/users/${user.id}`} key={user.id}>
									<div>
										<div>{user.firstName}</div>
										<div>{user.lastName}</div>
										<div>{user.email}</div>
									</div>
								</Link>
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
		allUsers: state.allUsers,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getAllUsers: () => dispatch(fetchAllUsers()),
	};
};

export default connect(mapState, mapDispatch)(AllUsers);
