import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { addToCart } from "../components/cartSlice";

export function Nveg() {
  const nonVegItems = useSelector((state) => state.nveg);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {nonVegItems.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onClick={() => {
            dispatch(addToCart({ ...item, quantity: 1 }));
          }}
        />
      ))}
    </div>
  );
}
