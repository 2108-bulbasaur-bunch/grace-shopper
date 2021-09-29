import React from "react";
import { connect } from "react-redux";
import {
	fetchCartThunk,
	updateQtyThunk,
	deleteItemThunk,
	checkoutThunk,
	addItemThunk,
} from "../store/cart";
import { fetchProducts } from "../store/products";

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.changeQty = this.changeQty.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.userId;
		this.props.getProducts();
		this.props.getCart(id);
		let guestCart = JSON.parse(localStorage.getItem("cart"));
		this.props.addItems(id, guestCart)
	}

	async changeQty(item, value) {
		const updatedItem = item;
		updatedItem.quantity = Number(value);
		await this.props.changeQty(this.props.match.params.userId, updatedItem);
	}

	render() {
		let cart = this.props.cart
		const products = this.props.products;
		const id = this.props.match.params.userId;

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

								<div>
									<div>in stock:</div>
									{
										(quantity = products.filter(
											(product) => product.id === item.productId
										)[0].quantity)
									}

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
										{/* <option selected={'1' == item.quantity ? true : false} value='1'>1</option>
                                        <option selected={'2'== item.quantity ? true : false} value='2'>2</option>
                                        <option selected={'35'== item.quantity ? true : false} value='35'>35</option> */}
									</select>
								</div>
								<div>purchasePrice: ${item.purchasePrice / 100}</div>
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
						<button type="button" onClick={() => this.props.checkoutCart(id)}>
							<a href="/confirmation">Checkout</a>
						</button>
					</div>
				)}
			</div>
		);
	}
}
const mapState = (state) => {
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
		checkoutCart: (userId) => dispatch(checkoutThunk(userId)),
		addItems: (userId, items) => dispatch(addItemThunk(userId, items))
	};
};

export default connect(mapState, mapDispatch)(Cart);
