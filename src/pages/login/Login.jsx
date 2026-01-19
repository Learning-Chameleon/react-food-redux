import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
export function Login() {
  const [state, dispatch] = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: "SET_USER", payload: { name: "Hari" } });
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1 style={{ color: state?.brandColor }}>Login Page</h1>
      <Input label="Username" />
      <Input label="Password" type="password" />
      <Button label="Submit" onClick={handleLogin} />
    </div>
  );
}
