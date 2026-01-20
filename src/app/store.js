import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/cartSlice";
import nvegReducer from "../pages/nvegSlice";
import vegReducer from "../pages/vegSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import userReducer from "../pages/login/userSlice";
import themeReducer from "../pages/navbar/navbarSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  nveg: nvegReducer,
  veg: vegReducer,
  user: userReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "theme", "cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
