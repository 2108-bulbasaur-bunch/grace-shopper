import React from "react";
import { fetchProducts } from "../store/products";
import { connect } from "react-redux";

class GuestCart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { cart: [] };
	}

	componentDidMount() {
		const guestCart = JSON.parse(localStorage.getItem("cart"));
		console.log("guestCart", guestCart);
		this.setState({ cart: guestCart });
		this.props.getProducts();
	}

	render() {
		const cart = this.state.cart;
		const products = this.props.products;
		let quantity = 0;
		console.log("this.props", this.props.products);

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
									</select>
								</div>
								<div>purchasePrice: ${item.purchasePrice / 100}</div>
								<button type="button">delete</button>
							</div>
						))}
						{/* {isLoggedIn ? (
            <button type="button"
            onClick={() => this.props.checkoutCart(id)}
            >
             <a href="/confirmation">Checkout</a>
            </button>
            ) : (
              <button type="button">
                <a href="/signup">Checkout</a>
              </button>
            )} */}
						{/* <button type="button" onClick={() => this.props.checkoutCart(id)}>
							<a href="/confirmation">Checkout</a>
						</button> */}
					</div>
				)}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		products: state.allProducts,
	};
};

const mapDispatch = (dispatch) => {
	return {
		getProducts: () => {
			dispatch(fetchProducts());
		},
	};
};

export default connect(mapState, mapDispatch)(GuestCart);
