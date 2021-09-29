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
    console.log("PRODUCTS", products);

    return (
      <div>
        {!cart[0] ? (
          <div>Add some sweets!</div>
        ) : (
          <div>
            {cart.map((item, idx) => {
              return (
                <div key={idx}>
                  <div>
                    {!products[0] ? (
                      <div>loading</div>
                    ) : (
                      <div>
                      {products.filter((product)=> product.id === item.productId)[0].name}
                      <div>
                      <h4>{item.quantity}</h4>
                      </div>
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
