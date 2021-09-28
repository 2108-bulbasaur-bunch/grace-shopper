import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, updateProductThunk } from "../store/oneProduct";
import { addItemThunk, fetchCartThunk} from "../store/cart";


class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  this.state={value:1}
    this.cart=[]
    this.userId=''

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
    
    const userId=await this.props.user.id

    this.cart= await this.props.getCart(4)
  
    
    console.log('props',this.props)
    console.log('cart',this.props.cart)
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    let cartItem={};
    cartItem.quantity=this.state.value;
    cartItem.purchasePrice=this.props.product.price;
    cartItem.orderId=this.props.cart[0].orderId;
    cartItem.productId=await this.props.product.id;
    // console.log('cartItem',cartItem)
    // console.log('this.props.user.id',this.props.user.id)
    await this.props.addItem(this.props.user.id,cartItem)
    
    event.preventDefault();
    try {
       this.props.addItem(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  async handleChange(event) {
    await this.setState({value: event.target.value});
  }

  render() {
    const { product } = this.props;

    return (
      <div key={product.id}>
        <img src={product.imageUrl} width="250" height="250" />
        <h3>{product.name}</h3>
        <h5>{product.price}</h5>
        <p>{product.description}</p>
        <p>Quantity Left: {product.quantity}</p>

        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input type="submit" value="add to cart" />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.singleProduct,
    user:state.auth,
    cart:state.cart
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    updateProduct: (product) => dispatch(updateProductThunk(product)),
    addItem: (userId, item) => dispatch(addItemThunk(userId, [item])),
    getCart: (userId) => dispatch(fetchCartThunk(userId))
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
