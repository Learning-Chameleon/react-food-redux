import { useSelector } from "react-redux";

export function NotFound() {
  const theme = useSelector((state) => state.theme);
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.brandColor,
        height: "80vh",
      }}
    >
      404 - Page Not Found
    </h1>
  );
}
