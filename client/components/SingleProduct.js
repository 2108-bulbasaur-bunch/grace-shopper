import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, updateProductThunk } from "../store/singleProduct";

class SingleProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
  }

  render() {
    const product = this.props.product;

    return (
      <div key={product.id}>
        <img src={product.imageURL} width="250" height="250" />
        <h3>{product.name}</h3>
        <h5>{product.price}</h5>
        <p>{product.description}</p>
        <form>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    updateProduct: (product) => dispatch(updateProductThunk(product)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
