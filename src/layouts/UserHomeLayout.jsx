import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { Navbar } from "../pages/navbar/Navbar";

export function UserHomeLayout() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor:
          theme?.theme === "light" ? "#f9f9f9" : theme?.brandColor,
      }}
    >
      <Navbar />
      <main
        style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          gap: "20px",
        }}
      >
        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </div>
        <Cart />
      </main>
      <Footer />
    </div>
  );
}
