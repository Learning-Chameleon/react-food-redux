import { appReducer } from "../reducers/appReducer";
import { useReducer } from "react";
import { AppContext } from "../contexts/AppContext";

const initialAppState = {
  theme: "light",
  lang: "en-US",
  user: null,
  menu: { veg: "Vegetarian", nveg: "Non Vegetarian" },
  background: "#fff",
  color: "#333",
  brandColor:"#E1114E",
  cart: [],
};
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
