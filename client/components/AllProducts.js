import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/allProducts";
import SingleProduct from "./SingleProduct";

class AllProducts extends React.Component {
  
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products;

    return (
      <div className="all-products">
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
