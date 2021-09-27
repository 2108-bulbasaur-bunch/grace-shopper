import React from "react";
import { connect } from "react-redux";
import {fetchAllOrders} from "../store/adminOrders"

class AllOrders extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
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
		orders: state.orders,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getOrders: () => dispatch(fetchAllOrders()),
	};
};

export default connect(mapState, mapDispatch)(AllOrders);
