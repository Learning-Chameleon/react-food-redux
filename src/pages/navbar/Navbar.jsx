import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { clearUser } from "../login/userSlice";
import { updateTheme } from "./navbarSlice";
export function Navbar() {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <nav
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme?.background,
        color: theme?.color,
      }}
    >
      <div>🥕 Logo</div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {Object.entries(theme?.menu).map(([key, value]) => (
          <li
            style={{
              padding: "0px 10px",
              cursor: "pointer",
            }}
            key={"menu" + key}
          >
            <NavLink
              to={key}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? theme?.brandColor : theme?.color,
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {key === "veg" ? "🌿" : "🍗"} {value}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        Hello{" "}
        <span style={{ color: theme?.brandColor }}>{user?.name ?? "User"}</span>
        <span
          onClick={() => dispatch(clearUser())}
          style={{ cursor: "pointer" }}
          title="Signout"
        >
          ,&nbsp; 🏃‍♂️&nbsp;
        </span>
        <select
          style={{ padding: "5px" }}
          value={theme?.theme}
          onChange={(e) => dispatch(updateTheme(e.target.value))}
        >
          <option value="light">☀️ </option>
          <option value="dark">🌙</option>
        </select>
      </div>
    </nav>
  );
}
