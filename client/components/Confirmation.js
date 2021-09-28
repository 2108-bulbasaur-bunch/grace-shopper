import React from "react";
import { connect } from "react-redux";
import { fetchCartThunk, checkoutThunk } from "../store/cart";
import { fetchProducts } from "../store/products";
import { fetchOrderHistory } from "../store/orders"

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.getOrderHistory(this.props.user.id)
  }
  render() {
    const orderHistory = this.props.orders;
    let recentOrder = orderHistory[orderHistory.length-1]
    if (!recentOrder) {
      recentOrder = {products: []}
    }
    // const recentOrderProducts = recentOrder.products ? recentOrder.products : []
    console.log(Object.keys(recentOrder))
    return (
      <div>
        <h1>Order Confirmed!</h1>
      </div>

    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
    orders: state.orders,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getOrderHistory: (userId) => dispatch(fetchOrderHistory(userId))
  };
};

export default connect(mapState, mapDispatch)(Confirmation);


// const cart = this.props.cart;
    // const products = this.props.products;

    // const prices = cart.map((item) => {
    //   return item.quantity * item.purchasePrice;
    // });

    // let totalPrice;

    // if (prices.length) {
    //   const reducer = (previousValue, currentValue) =>
    //     previousValue + currentValue;
    //   totalPrice = prices.reduce(reducer) / 100;
    // }

// <div>
      //   <h2>Checkout</h2>
      //   <div>
      //     {cart.map((item, idx) => {
      //       const id = item.productId;
      //       return (
      //         <div key={idx}>
      //           <h3>{products[id].name}</h3>
      //           <img src={products[id].imageUrl} width="150" height="150" />
      //           <h5>Quantity: {item.quantity}</h5>
      //           <h5>Price: ${item.purchasePrice/100}</h5>
      //         </div>
      //       );
      //     })}
      //   </div>
      //   <div>
      //     <h3>Total Price: ${totalPrice}</h3>
      //   </div>
      //   <button
      //     type="button"
      //     onClick={this.props.checkoutCart}
      //   >
      //     Complete Order
      //   </button>
      // </div>
