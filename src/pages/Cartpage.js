import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";

const Cartpage = ({ cart }) => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItem, setTotalItem] = useState(0);

	useEffect(() => {
		let count = 0;
		let price = 0;
		cart.forEach((item) => {
			count += item.quantity;
			price += item.price * item.quantity;
		});
		setTotalItem(count);
		setTotalPrice(price);
	}, [cart, totalItem, totalPrice, setTotalPrice, setTotalItem]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-8">
					{cart.map((product) => (
						<CartItem product={product} />
					))}
				</div>

				<div className="col-4">
					<div className="card">
						<div className="card-header">Cart Summary</div>
						<div className="card-body">
							<ul class="list-group">
								<li class="list-group-item">
									Total Items = <strong>{totalItem}</strong>
								</li>
								<li class="list-group-item">
									Total Price = <strong>{totalPrice}</strong>
								</li>
								<button className="btn btn-success mt-3">
									Proceed to checkout
								</button>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Cartpage);
