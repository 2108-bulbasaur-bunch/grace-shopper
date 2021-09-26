import React from "react";
import { connect } from "react-redux";
import { fetchCartThunk } from "../store/cart";
import { fetchProducts } from "../store/products";

class Cart extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("param.id", this.props.match.params.userId);
		this.props.getCart(this.props.match.params.userId);
		this.props.getProducts();
	}

	render() {
		console.log("props", this.props);
		const cart = this.props.cart;
		const products = this.props.products;

		return (
			<div>
				<div>Cart</div>
				{!cart[0] ? (
					<div>empty cart</div>
				) : (
					<div>
						{cart.map((item, idx) => (
							<div key={idx}>
								<div>
									{
										products.filter(
											(product) => product.id === item.productId
										)[0].name
									}
								</div>
								<div>qty: {item.quantity}</div>
								<div>purchasePrice: {item.purchasePrice}</div>
							</div>
						))}
					</div>
				)}
			</div>
		);
	}
}
const mapState = (state) => {
	console.log("state", state);
	return {
		cart: state.cart,
		products: state.allProducts,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getCart: (userId) => dispatch(fetchCartThunk(userId)),
		getProducts: () => dispatch(fetchProducts()),
	};
};

export default connect(mapState, mapDispatch)(Cart);
