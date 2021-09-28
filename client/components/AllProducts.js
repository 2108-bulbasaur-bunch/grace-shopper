import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import { Link } from "react-router-dom";
import { addItemThunk, fetchCartThunk} from "../store/cart";


class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state={value:1}
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  async handleSubmit(product) {
    event.preventDefault();

    try {
      let cartItem={};
    
      cartItem.quantity=this.state.value;
      cartItem.purchasePrice=product.price;
      cartItem.orderId=1000;
      cartItem.productId= await product.id;
    
      await this.props.addItem(this.props.user.id,cartItem)
    } catch (error) {
      console.log(error);
    }
  }

  async handleChange(event) {
    await this.setState({value: event.target.value});
  }

  render() {
    const products = this.props.products || [];
   
    if (products.length === 0) {
      return <h1>Out of stock!</h1>;
    } else {
      return (
        <div className="all-products">
          {products.map((product) => (
            <div key={product.id} className="indiv-product">
              <Link to={`/products/${product.id}`} >
                <img src={product.imageUrl} width="250" height="250" />
                <h3>{product.name}</h3>
              </Link>
                <h5>{product.price / 100}</h5>
                <form onSubmit={()=>this.handleSubmit(product)}>
                  <select
                                    
										onChange={this.handleChange}
									>
										{Array.from(Array(product.quantity), (e, i) => {
											return (
												<option
													value={i + 1}
													
												>
													{i + 1}
												</option>
											);
										})}
                                        
									</select>
                  <button type="submit">Add to Cart</button>
                </form>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapState = (state) => {
  return {
    products: state.allProducts,
    user:state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    addItem: (userId, item) => dispatch(addItemThunk(userId, [item])),
    getCart: (userId) => dispatch(fetchCartThunk(userId))
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
