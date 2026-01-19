import { useContext } from "react";
import { Card } from "../components/Card";
import { AppContext } from "../contexts/AppContext";
const veg = [
  { name: "Butter Naan", price: 10, imageUrl: "/food/butter-naan.png" },
  { name: "Dal", price: 10, imageUrl: "/food/dal.png" },
  { name: "Dosa", price: 15, imageUrl: "/food/dosa.png" },
  { name: "Idli", price: 15, imageUrl: "/food/idli.png" },
  {
    name: "Malbar Parotta",
    price: 20,
    imageUrl: "/food/malbar-parotta.png",
  },
  {
    name: "Nool Parotta",
    price: 18,
    imageUrl: "/food/nool-parotta.png",
  },
  {
    name: "North Indian Meal",
    price: 18,
    imageUrl: "/food/north-indian-meal.png",
  },
  { name: "Rice", price: 12, imageUrl: "/food/rice.png" },
  {
    name: "South Indian Meal",
    price: 10,
    imageUrl: "/food/south-indian-meal.png",
  },
  { name: "Upma", price: 8, imageUrl: "/food/upma.png" },
];
export function Veg() {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {veg.map((item, index) => (
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
