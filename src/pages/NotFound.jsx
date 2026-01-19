import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
export function NotFound() {
  const [state] = useContext(AppContext);
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: state.brandColor,
        height: "80vh",
      }}
    >
      404 - Page Not Found
    </h1>
  );
}
