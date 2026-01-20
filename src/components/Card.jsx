import { useSelector } from "react-redux";
import { Button } from "./Button";

export function Card({ name, price, imageUrl, onClick }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        display: "inline-block",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: theme?.background,
        color: theme?.color,
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "300px",
          height: "auto",
          borderRadius: "8px 8px 0px 0px",
        }}
      />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <div>
        <Button label={"Add to cart"} onClick={onClick} />
      </div>
    </div>
  );
}
