import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice'
import { api } from './api/apiSlice';
import useReducer from './features/user/userSlice';


const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
        user:useReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;