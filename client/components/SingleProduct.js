import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, updateProductThunk } from "../store/singleProduct";

class SingleProduct extends React.Component {

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
  }

  render() {
    return (
      <div>
        {/* add product info */}
      </div>
    )
  }
}


const mapState = (state) => {
  return {
    product: state.product
  }
}

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    updateProduct: (product) => dispatch(updateProductThunk(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct);
