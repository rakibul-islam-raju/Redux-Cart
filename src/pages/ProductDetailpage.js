import { connect } from "react-redux";

const ProductDetailpage = ({ currentItem }) => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-8">
					<div className="card">
						<div className="card-body">
							<img
								className="img-thumbnail"
								src={currentItem.image}
								alt=""
							/>
							<h4>{currentItem.name}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentItem: state.shop.currentItem,
	};
};

export default connect(mapStateToProps)(ProductDetailpage);
