import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, loadCurrentItem } from "../redux/Shopping/Shopping-actions";

const ProductItem = ({ product, addToCart, loadCurrentItem }) => {
	return (
		<div className="col-4">
			<div className="card mb-4">
				<div className="card-body d-flex">
					<div className="col-md-4">
						<img
							className="img-thumbnail"
							style={{ height: "100px" }}
							src={product.image}
							alt=""
						/>
					</div>
					<div className="col-md-8 ">
						<div className="">
							<h4>{product.name}</h4>
							<h1>{product.price}</h1>
							<Link to={`product/${product.id}`}>
								<button
									onClick={() => loadCurrentItem(product)}
									className="btn btn-secondary me-2"
								>
									View
								</button>
							</Link>
							<button
								onClick={() => addToCart(product.id)}
								className="btn btn-success"
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id)),
		loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
	};
};

export default connect(null, mapDispatchToProps)(ProductItem);
