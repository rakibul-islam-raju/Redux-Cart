import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;
		cart.forEach((item) => {
			count += item.quantity;
		});
		setCartCount(count);
	}, [cart, cartCount]);

	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 shadow">
			<div class="container-fluid">
				<Link class="navbar-brand" to="/">
					REDUX CART
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link
								class="nav-link active"
								aria-current="page"
								to="/cart"
							>
								<button
									type="button"
									class="btn btn-warning position-relative"
								>
									Cart
									<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
										{cartCount}
										<span class="visually-hidden">
											unread messages
										</span>
									</span>
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Header);
