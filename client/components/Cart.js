import React from "react";
import { connect } from "react-redux";
import { fetchCartThunk, updateQtyThunk, deleteItemThunk } from "../store/cart";
import { fetchProducts } from "../store/products";

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { cart: [], item: {} };
		this.changeQty = this.changeQty.bind(this);
	}

	componentDidMount() {
		// console.log("param.id", this.props.match.params.userId);
		this.props.getProducts();
		this.props.getCart(this.props.match.params.userId);
		this.setState({ cart: this.props.cart });
	}

	async changeQty(item, value) {
		const updatedItem = item;
		updatedItem.quantity = Number(value);
		// console.log("updatedItem", updatedItem);
		await this.setState({ item: updatedItem });

		this.props.changeQty(this.props.match.params.userId, this.state.item);
	}
	render() {
		console.log("props", this.props);
		console.log("this.state", this.state);

		const cart = this.props.cart;
		const products = this.props.products;
		let quantity = 0;

		return (
			<div>
				<h2>Cart</h2>
				{!cart[0] ? (
					<div>empty cart</div>
				) : (
					<div>
						{cart.map((item, idx) => (
							<div key={idx}>
								<div>
									{!products[0] ? (
										<div>loading</div>
									) : (
										products.filter(
											(product) => product.id === item.productId
										)[0].name
									)}
								</div>
								{/* <div>{product.name}</div> */}
								{
									(quantity = products.filter(
										(product) => product.id === item.productId
									)[0].quantity)
								}
								<div>
									<select
										onChange={(event) =>
											this.changeQty(item, event.target.value)
										}
									>
										{Array.from(Array(quantity), (e, i) => {
											return (
												<option
													value={i + 1}
													selected={i + 1 == item.quantity ? true : false}
												>
													{i + 1}
												</option>
											);
										})}
									</select>
								</div>
								<div>purchasePrice: ${item.purchasePrice}</div>
								<button
									type="button"
									onClick={() =>
										this.props.deleteItem(
											this.props.match.params.userId,
											item,
											history
										)
									}
								>
									delete
								</button>
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

const mapDispatch = (dispatch, { history }) => {
	return {
		getCart: (userId) => dispatch(fetchCartThunk(userId)),
		getProducts: () => dispatch(fetchProducts()),
		changeQty: (userId, body, history) =>
			dispatch(updateQtyThunk(userId, body, history)),

		deleteItem: (userId, body, history) =>
			dispatch(deleteItemThunk(userId, body, history)),
	};
};

export default connect(mapState, mapDispatch)(Cart);
