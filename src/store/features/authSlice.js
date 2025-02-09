import {createSlice} from "@reduxjs/toolkit";
import {getCookie} from "cookies-next";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    user: getCookie('user') && JSON.parse(getCookie('user')).access_token,
  },
  reducers: {
    login: (state, actions) => {
      return {...state, user: actions.payload};
    },
    logout: () => {
      return {};
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
