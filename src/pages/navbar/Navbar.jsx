import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { NavLink } from "react-router-dom";
export function Navbar() {
  const [state, dispatch] = useContext(AppContext);

  return (
    <nav
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: `${state?.background}`,
        color: `${state?.color}`,
      }}
    >
      <div>🥕 Logo</div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        {Object.entries(state?.menu).map(([key, value]) => (
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
                color: isActive ? state?.brandColor : state?.color,
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
        <span style={{ color: state?.brandColor }}>
          {state?.user?.name ?? "User"}
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "LOGOUT" })}
          title="Signout"
        >
          ,&nbsp; 🏃‍♂️&nbsp;
        </span>
        <select
          style={{ padding: "5px" }}
          value={state?.theme}
          onChange={(e) =>
            dispatch({ type: "SET_THEME", payload: e.target.value })
          }
        >
          <option value="light">☀️ </option>
          <option value="dark">🌙</option>
        </select>
      </div>
    </nav>
  );
}
