import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import { getUser } from '../../Services';
import { signOut } from "@firebase/auth";

const initialState = {
    user: {},
    token: localStorage.getItem('userId') || null,
    loading: false,
    isLogin: false
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        checkLogin: (state) => {
            state.token = localStorage.getItem('userId');
            state.token!==null ? state.isLogin = true : state.isLogin = false; 
        },
        loggedOut: (state) => {
            state.isLogin = false;
            signOut(auth);
            state.token = null;
            localStorage.removeItem('userId');
        },
        isLoading: (state, action) => {
            state.loading = action.payload
        },
    }, 
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, action) => {
          state.loading = false;
          state.user = action.payload;
        },
        [getUser.rejected]: (state) => {
          state.loading = false;
        },
    }
})
export const { checkLogin, loggedOut, isLoading } = AuthSlice.actions;
export default AuthSlice.reducer;