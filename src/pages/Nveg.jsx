import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Card } from "../components/Card";

const nonVegItems = [
  { name: "Chicken Fry", price: 12, imageUrl: "/food/chicken-fry.png" },
  { name: "Chicken Gravy", price: 15, imageUrl: "/food/chicken-gravy.png" },
  {
    name: "Hyderabad Dum Biryani",
    price: 20,
    imageUrl: "/food/hyd-dum-bir.png",
  },
  { name: "Mutton Fry", price: 18, imageUrl: "/food/mutton-fry.png" },
  { name: "Tandoor", price: 10, imageUrl: "/food/tandoor.png" },
];
export function Nveg() {
  const [state, dispatch] = useContext(AppContext);
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {nonVegItems.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...item, quantity: 1 },
            });
            console.log("Added to cart:", state?.cart);
          }}
        />
      ))}
    </div>
  );
}
