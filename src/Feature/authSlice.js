import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const {
  setAuth,
} = authSlice.actions;

export const selectAuth = (state) => state.auth;

const store  = configureStore({
    reducer: authSlice.reducer,
})

export default store;