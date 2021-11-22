import { useState } from "react";
import { connect } from "react-redux";
import {
	adjustQuantity,
	removeFromCart,
} from "../redux/Shopping/Shopping-actions";

const CartItem = ({ product, removeFromCart, adjustQuantity }) => {
	const [input, setInput] = useState(product.quantity);

	const onChangeHandler = (e) => {
		setInput(e.target.value);
		adjustQuantity(product.id, e.target.value);
	};

	return (
		<div className="card mb-4">
			<div className="card-body d-flex justify-content-between">
				<div className="col-4">
					<img className="img-thumbnail" src={product.image} alt="" />
				</div>
				<div className="col-8 ps-3">
					<h4>{product.name}</h4>
					<h5>${product.price}</h5>
					<input
						min={1}
						className="form-control"
						type="number"
						value={input}
						onChange={onChangeHandler}
					/>
					<button
						onClick={() => removeFromCart(product.id)}
						className="btn btn-danger mt-2"
					>
						X
					</button>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (id) => dispatch(removeFromCart(id)),
		adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
	};
};

export default connect(null, mapDispatchToProps)(CartItem);
