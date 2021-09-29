import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, updateProductThunk } from "../store/oneProduct";
import { addItemThunk, fetchCartThunk } from "../store/cart";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  this.state={value:1}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      let cartItem={};
          cartItem.quantity=this.state.value;
          cartItem.purchasePrice=this.props.product.price;
          cartItem.orderId=100
          cartItem.productId=await this.props.product.id;

      await this.props.addItem(this.props.user.id,cartItem)
      } catch (error) {
        console.log(error);
      }
    }

  async handleChange(event) {
    await this.setState({ value: event.target.value });
  }

  render() {
    const { product } = this.props;

    return (
      <div key={product.id} className="product-detail">
        <img src={product.imageUrl} width="250" height="250" />
        <h3>{product.name}</h3>
        <h5>Price: ${product.price / 100}</h5>
        <p className="wrap-description">{product.description}</p>
        <p className="quantity-tracker">Quantity Left: {product.quantity}</p>

        <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange}>
            {Array.from(Array(product.quantity), (e, i) => {
              return (
                <option key={i}
                  value={i + 1}
                >
                  {i + 1}
                </option>
              );
            })}
        </select>
          <input className="submit-button" type="submit" value="add to cart" />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
    user:state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    updateProduct: (product) => dispatch(updateProductThunk(product)),
    addItem: (userId, item) => dispatch(addItemThunk(userId, [item])),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
