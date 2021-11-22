import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Cartpage from "./pages/Cartpage";
import ProductDetailpage from "./pages/ProductDetailpage";
import Shoppage from "./pages/Shoppage";

const App = ({ currentItem }) => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="" element={<Shoppage />} />
					<Route path="/cart" element={<Cartpage />} />
					{!currentItem ? (
						<Route path="*" element={<Navigate replace to="/" />} />
					) : (
						<Route
							path="/product/:productID"
							element={<ProductDetailpage />}
						/>
					)}
				</Routes>
			</BrowserRouter>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		currentItem: state.shop.currentItem,
	};
};

export default connect(mapStateToProps)(App);
