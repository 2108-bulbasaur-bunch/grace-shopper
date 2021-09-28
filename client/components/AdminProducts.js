// import React from "react";
// import { connect } from "react-redux";
// import { addProductThunk, deleteProductThunk } from "../store/products"
// import { fetchSingleProduct, updateProductThunk } from "../store/oneProduct"

// class EditProduct extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       price: "",
//       quantity: "",
//       imageUrl: "",
//       description: "",
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount(){

//   }

//   componentDidUpdate() {

//   }

//   handleChange(evt){
//     this.setState({
//       [evt.target.name]: evt.target.value,
//     })
//   }

//   handleSubmit(evt){
//     evt.preventDefault();
//     this.props.updateProduct({...this.props.product, ...this.state})
//   }

//   render() {
//     const { name, price, quantity, imageUrl, description } = this.state;
//     const {handleChange, handleSubmit} = this;
//     return (
//       <div>
//         <form id="update-product-form" onSubmit={handleSubmit}>
//           <h1>Update Product</h1>
//           <label htmlFor="name">Name:</label>
//           <input name="name" onChange={handleChange} value={name} />

//           <label htmlFor="price">Price (in cents):</label>
//           <input name="price" onChange={handleChange} value={price} />

//           <label htmlFor="quantity">Quantity:</label>
//           <input name="quantity" onChange={handleChange} value={quantity} />

//           <label htmlFor="imageUrl">Image Url:</label>
//           <input name="imageUrl" onChange={handleChange} value={imageUrl} />

//           <label htmlFor="description">Description:</label>
//           <input
//             name="description"
//             onChange={handleChange}
//             value={description}
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )

//   }
// }
