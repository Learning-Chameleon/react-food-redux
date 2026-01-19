import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function Footer() {
  const [state] = useContext(AppContext);
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
        borderTop: "1px solid #ccc",
        backgroundColor: state?.background,
        color: state?.color,
      }}
    >
      <p>© 2024 React Food Redux. All rights reserved.</p>
    </footer>
  );
}
