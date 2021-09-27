import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, updateProductThunk } from "../store/oneProduct";
import {addItemThunk} from '../store/cart'

class SingleProduct extends React.Component {
  constructor(props){
    super(props)
    this.state={quantity:''}
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getSingleProduct(productId);
  }

  async handleSubmit(event){
    console.log('event.target',event.target)
    console.log('this.state',this.state)
    event.preventDefault();
    try {
      await this.props.addItem(this.state)
    } catch (error) {
      console.log(error)
    }
  }

  handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
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
        <form onSubmit={this.handleSubmit}> 
          {/* <label>Quantity: <input type="text"/> </label>*/}
           <select onChange={this.handleChange}>
              <option value='1'>1</option>
               <option value='2'>2</option>
                <option value='3'>3</option>
                 <option value='4'>4</option>
           </select> 
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
