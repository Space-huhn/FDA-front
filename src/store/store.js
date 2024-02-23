import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/features/authSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
