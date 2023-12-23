import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import authReducer from "./authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: { auth: authReducer, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([api.middleware]),
});

export default store;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
