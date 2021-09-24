import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";

class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products || [];

    if (products.length === 0) {
      return <h1>Out of stock!</h1>;
    } else {
      return (
        <div className="all-products">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <img src={product.imageURL} width="250" height="250" />
                <h3>{product.name}</h3>
                <h5>{product.price}</h5>
                <form>
                  {/* <label>Quantity: <input type="text"/> </label>*/}
                  <button type="submit">Add to Cart</button>
                </form>
              </div>
            );
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
