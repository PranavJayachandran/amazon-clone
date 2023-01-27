import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  value: 0,
  product: [],
  price: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUserName: (state, action) => {
      state.userName = action.payload;
      console.log(current(state));
    },
    incrementCountByAmount: (state, action) => {
      state.value += action.payload;
      console.log(current(state));
    },
    addProduct: (state, action) => {
      state.value += 1;
      state.product.push({ name: action.payload.name, id: action.payload.id });
      state.price += action.payload.price;
      console.log(current(state));
    },
    removeProduct: (state, action) => {
      let p = 0;
      state.product = state.product.filter((element) => {
        if (p == 1 || action.payload.id != element.id) return element;
        if (action.payload.id == element.id) {
          state.value -= 1;
          state.price -= action.payload.price;
          p = 1;
        }
      });

      console.log(current(state));
    },
    removeAllProduct: (state) => {
      state.value = 0;
      state.product = [];
      state.price = 0;
      console.log(current(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  incrementCountByAmount,
  addProduct,
  removeProduct,
  removeAllProduct,
  addUserName,
} = counterSlice.actions;

export const selectValue = (state) => state.counter.value;
export const selectProducts = (state) => state.counter.product;
export const selectPrice = (state) => state.counter.price;
export const selectUserName = (state) => state.counter.userName;
export default counterSlice.reducer;
