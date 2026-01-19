import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
export function Button({ label, onClick }) {
  const [state] = useContext(AppContext);
  return (
    <button
      style={{
        padding: "5px",
        minWidth: "100px",
        background: state.brandColor,
        borderRadius: "4px",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {" "}
      {label}{" "}
    </button>
  );
}
