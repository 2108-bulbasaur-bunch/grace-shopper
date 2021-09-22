import React from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from "../store/allProducts";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="all-products">
        {/* map through products */}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products
  }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts);
