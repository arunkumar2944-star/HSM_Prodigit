import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import hotelReducer from "../redux/slices/hotelSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,hotel: hotelReducer,
  },
});
