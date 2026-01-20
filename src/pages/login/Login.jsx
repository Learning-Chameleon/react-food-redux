import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { setUser } from "./userSlice";
export function Login() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(setUser({ name: "Hari" }));
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
      <h1 style={{ color: theme?.brandColor }}>Login Page</h1>
      <Input label="Username" />
      <Input label="Password" type="password" />
      <Button label="Submit" onClick={handleLogin} />
    </div>
  );
}
