import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export function ProtectedRoute({ children }) {
  const [state] = useContext(AppContext);
  if (!state.user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
