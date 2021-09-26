import React from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../store/orders";

class OrderHistory extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getOrderHistory(this.props.match.params.userId);
	}

	render() {
		const orderHistory = this.props.orders;

		return (
			<div>
				{!orderHistory[0] ? (
					<div>no orders</div>
				) : (
					<div>
						{orderHistory.map((order) => (
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
		orders: state.orders,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getOrderHistory: (userId) => dispatch(fetchOrders(userId)),
	};
};

export default connect(mapState, mapDispatch)(OrderHistory);
