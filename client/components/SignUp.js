import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

//FORM IS CREATED, BUT IT DOES NOT WORK. WHEN SUBMIT IS HIT, IT GIVES A BAD TOKEN ERROR.

const SignUpForm = (props) => {
	const { name, displayName, handleSubmit, error } = props;

	return (
		<div>
			<form onSubmit={handleSubmit} name={name}>
      <div>
					<label htmlFor="firstName">
						<small>First Name</small>
					</label>
					<input name="firstName" type="text" />
				</div>
        <div>
					<label htmlFor="lastName">
						<small>Last Name</small>
					</label>
					<input name="lastName" type="text" />
				</div>
				<div>
					<label htmlFor="email">
						<small>Email</small>
					</label>
					<input name="email" type="text" />
				</div>
				<div>
					<label htmlFor="password">
						<small>Password</small>
					</label>
					<input name="password" type="password" />
				</div>
        <div>
					<label htmlFor="shippingAddress">
						<small>Shipping Address</small>
					</label>
					<input name="shippingAddress" type="text" />
				</div>
				<div>
					<button type="submit">{displayName}</button>
				</div>
				{error && error.response && <div> {error.response.data} </div>}
			</form>
		</div>
	);
};

const mapSignup = (state) => {
	return {
		name: "signup",
		displayName: "Sign Up",
		error: state.auth.error,
	};
};

const mapDispatch = (dispatch) => {
	return {
		handleSubmit(evt) {
			evt.preventDefault();
			const formName = evt.target.name;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const password = evt.target.password.value;
			const email = evt.target.email.value;
      const shippingAddress = evt.target.shippingAddress.value;
			dispatch(authenticate(firstName, lastName, password,email, shippingAddress, formName));
		},
	};
};

export const SignUp = connect(mapSignup, mapDispatch)(SignUpForm);
