import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

import { connect } from "react-redux";

const Shoppage = ({ products }) => {
	// const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	getProducts();
	// }, []);

	// const getProducts = async () => {
	// 	try {
	// 		const response = await fetch("/shop.json");
	// 		const data = await response.json();
	// 		setProducts(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className="container">
			<div className="row">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.shop.products,
	};
};

export default connect(mapStateToProps)(Shoppage);
