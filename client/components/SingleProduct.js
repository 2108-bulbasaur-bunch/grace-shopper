import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, updateProductThunk } from "../store/oneProduct";
import {addItemThunk} from '../store/cart'

class SingleProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
  }

  render() {
    const {product} = this.props;

    return (
      <div key={product.id}>
        <img src={product.imageUrl} width="250" height="250"/>
        <h3>{product.name}</h3>
        <h5>{product.price}</h5>
        <p>{product.description}</p>
        <p>Quantity Left: {product.quantity}</p>
        <form>
          {/* <label>Quantity: <input type="text"/> </label>*/}
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    updateProduct: (product) => dispatch(updateProductThunk(product)),
    addItem: (item)=> dispatch(addItemThunk)
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
