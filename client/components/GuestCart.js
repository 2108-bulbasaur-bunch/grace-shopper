import React from "react";
import { fetchProducts } from "../store/products";
import { connect } from "react-redux";

class GuestCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const guestCart = JSON.parse(localStorage.getItem("cart"));
    console.log("guestCart", guestCart);
    this.setState({ cart: guestCart });
    this.props.getProducts();
  }

  async handleChange(event) {
    await this.setState({ value: event.target.value });
  }

  render() {
    const cart = this.state.cart;
    const products = this.props.products;
    const options2 = { style: "currency", currency: "USD" };

    let quantity = 0;
    console.log("PRODUCTS", products);

    return (
      <div>
        <h2>Cart</h2>
        <p>
          Welcome, Guest! You will need to <a href="/login">login</a> or{" "}
          <a href="/signup">sign up</a> in order to complete your order.
        </p>
        {!cart[0] ? (
          <div>Add some sweets!</div>
        ) : (
          <div>
            {cart.map((item, idx) => {
              return (
                <div key={idx} className="item-in-cart">
                  <div>
                    {!products[0] ? (
                      <div>loading</div>
                    ) : (
                      <img
                        src={
                          products.filter(
                            (product) => product.id === item.productId
                          )[0].imageUrl
                        }
                        width="150"
                        height="150"
                      />
                    )}
                  </div>
                  <div>
                    {!products[0] ? (
                      <div>loading</div>
                    ) : (
                      <div>
                        {
                          products.filter(
                            (product) => product.id === item.productId
                          )[0].name
                        }
                        <div>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                        {/* <div>
                          Quantity:
                        <select onChange={this.handleChange}>
                          {Array.from(Array(item.quantity), (e, i) => {
                            return (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            );
                          })}
                        </select>
                        </div> */}
                        <div className="purchase-price-guest">
                          Price:{" "}
                          {new Intl.NumberFormat("en-US", options2).format(
                            item.purchasePrice / 100
                          )}
                        </div>
                        <button
                          type="button"
                          // onClick={this.handleChange(cart.splice(cart.indexOf(item), 1))}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <button type="button">
              <a href="/signup">Checkout</a>
            </button>
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
