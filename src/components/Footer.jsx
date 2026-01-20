import { useSelector } from "react-redux";

export function Footer() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
        borderTop: "1px solid #ccc",
        backgroundColor: theme?.background,
        color: theme?.color,
      }}
    >
      <p>© 2024 React Food Redux. All rights reserved.</p>
    </footer>
  );
}
