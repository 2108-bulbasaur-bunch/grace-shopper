import React from "react";
import { connect } from "react-redux";
import {fetchAllOrders} from "../store/adminOrders"
import {me} from "../store/auth"

class AllOrders extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.me();
		this.props.getOrders();
	}

	render() {
		const allOrders = this.props.orders;

		return (
			<div>
				{!allOrders[0] ? (
					<div>Loading...</div>
				) : (
					<div>
						{allOrders.map((order) => (
							<div key={order.id}>purchaseDate:{order.purchaseDate}</div>
						))}
					</div>
				)}
			</div>
		);
	}
}
const mapState = (state) => {
	return {
		orders: state.adminOrders,
	};
};

const mapDispatch = (dispatch) => {
	return {
    me: () => dispatch(me()),
		getOrders: () => dispatch(fetchAllOrders()),
	};
};

export default connect(mapState, mapDispatch)(AllOrders);
