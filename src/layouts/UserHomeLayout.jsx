import { useContext } from "react";
import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { AppContext } from "../contexts/AppContext";
import { Navbar } from "../pages/navbar/Navbar";
import { Outlet } from "react-router-dom";

export function UserHomeLayout() {
  const [state] = useContext(AppContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor:
          state?.theme === "light" ? "#f9f9f9" : state?.brandColor,
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
