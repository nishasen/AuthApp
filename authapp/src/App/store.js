import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../Features/Auth/AuthSlice';
import ToastReducer from '../Features/Toast/ToastSlice';

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        toast: ToastReducer,
    }
})