import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      // // Calcalate the items price
      // state.itemsPrice = addDecimals(
      //   state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      // );
      // // Calcalate the shipping price,(if order is over $100 then free, else $10 shipping
      // state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      // // Calcalate the tax price (15% tax),
      // state.taxPrice = addDecimals(
      //   Number((0.15 * state.itemsPrice).toFixed(2))
      // );

      // // Calcalate the total price
      // state.totalPrice = (
      //   Number(state.itemsPrice) +
      //   Number(state.shippingPrice) +
      //   Number(state.taxPrice)
      // ).toFixed(2);

      // localStorage.setItem("cart", JSON.stringify(state));
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    // clearCartItems: (state, action) => {
    //   state.cartItems = [];
    //   return updateCart(state);
    // },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    resetCart: (state) => (state = initialState),
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
