import * as actionTypes from "./Shopping-types";

const initialState = {
	products: [
		{
			id: 1,
			name: "Shirt 1",
			price: 10,
			image: "https://images.dxl.com/is/image/CasualMale/210915_DXL_PLP_Shirts%20Update_3512_SHIRT-3",
		},
		{
			id: 2,
			name: "Shirt 2",
			price: 12,
			image: "https://www.grameenuniqlo.com/pub/media/catalog/product/cache/image/600x600/e9c3970ab036de70892d86c6d221abfe/i/_/i_1.jpg",
		},
		{
			id: 3,
			name: "Shirt 3",
			price: 15,
			image: "https://assets.ajio.com/medias/sys_master/root/20210403/TCIf/6068daf77cdb8c1f147d2662/-473Wx593H-461866963-blue-MODEL.jpg",
		},
		{
			id: 4,
			name: "Tshirt 1",
			price: 7,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bgi-JJhk9DDo-TtBCAf2lo-vFS74SA7OKA&usqp=CAU",
		},
		{
			id: 5,
			name: "Tshirt 2",
			price: 8,
			image: "https://bongswag.com/wp-content/uploads/2021/03/bongswag-best-bengali-graphic-tshirt-thamle-hobe-na-scaled.jpg",
		},
		{
			id: 6,
			name: "Tshirt 3",
			price: 10,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8glbL6Mzpbti1lWHt-L6ucPm6hozZc8CK_HAm9TFXNU9SIAw-vnkCrFnnZYx1ZenwCiI&usqp=CAU",
		},
	], // {id, title, price, description, image}
	cart: [], // {id, title, price, description, image, quantity}
	currentItem: null,
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			// get the product from array
			const item = state.products.find(
				(product) => product.id === action.payload.id
			);
			// check if the item is in the cart already
			const inCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false
			);
			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, quantity: item.quantity + 1 }
								: item
					  )
					: [...state.cart, { ...item, quantity: 1 }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(
					(item) => item.id !== action.payload.id
				),
			};
		case actionTypes.ADJUST_QUANTITY:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: +action.payload.quantity }
						: item
				),
			};
		case actionTypes.LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
