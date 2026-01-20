import { useSelector } from "react-redux";

export function Button({ label, onClick }) {
  const theme = useSelector((state) => state.theme);
  const handleClick = typeof onClick === "function" ? onClick : () => {};
  return (
    <button
      style={{
        padding: "5px",
        minWidth: "100px",
        background: theme?.brandColor,
        borderRadius: "4px",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
