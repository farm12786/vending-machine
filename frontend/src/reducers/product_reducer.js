import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product_list: [],
  selected_product: {},
  payment_method: "",
  purchase_status: false,
  update_stock: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.product_list = action.payload;
    },
    selectProduct: (state, action) => {
      state.selected_product = action.payload;
    },
    selectPayment: (state, action) => {
      state.payment_method = action.payload;
    },
    updatePurchase: (state, action) => {
      state.purchase_status = action.payload;
    },
    updateStock: (state, action) => {
      state.update_stock = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProduct,
  selectProduct,
  selectPayment,
  updatePurchase,
  updateStock,
} = productSlice.actions;

export default productSlice.reducer;
