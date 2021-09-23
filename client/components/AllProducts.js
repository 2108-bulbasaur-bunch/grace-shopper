import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/allProducts";
import SingleProduct from "./SingleProduct";

class AllProducts extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products || [];
    if(products.length === 0){
      return (
        <h1>No Products</h1>
      )
    } else {
      return (
        <div className="all-products">
          {products.map((product) => {
            return <div key={product.id}>
              <h1>{product.name}</h1>
              </div>
            // (<SingleProduct key={product.id} props={product} />);
          })}
        </div>
      );

    }

  }
}

const mapState = (state) => {
  return {
    products: state.allProducts,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
