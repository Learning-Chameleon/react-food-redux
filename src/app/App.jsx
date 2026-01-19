import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserHomeLayout } from "../layouts/UserHomeLayout";
import { Login } from "../pages/login/Login";
import { NotFound } from "../pages/NotFound";
import { Nveg } from "../pages/Nveg";
import { Veg } from "../pages/Veg";
import { AppProvider } from "../providers/AppProvider";
import { ProtectedRoute } from "../router/ProtectedRoute";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <UserHomeLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                  }}
                >
                  #1 Food ordering site
                  <span style={{ color: "green" }}>🍔</span>
                </h1>
              }
            />
            <Route path="veg" element={<Veg />} />
            <Route path="nveg" element={<Nveg />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
