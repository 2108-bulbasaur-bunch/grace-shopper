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
		return (
			<div>
				<h1>UserList</h1>
				<div>
					{!allUsers[0] ? (
						<h2>No Users</h2>
					) : (
						<div className="all-users">
							{allUsers.map((user) => (
								<Link to={`/users/${user.id}`} key={user.id}>
									<div className="user">
										<p>Name: {user.firstName} {user.lastName}</p>
										<p>Email: {user.email}</p>
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
