import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Button } from "./Button";

export function Cart() {
  const [state, dispatch] = useContext(AppContext);
  return (
    <>
      {state?.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={{ padding: "20px", width: "300px" }}>
          <h2>Your Cart 🛒</h2>
          {state?.cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
                display: "flex",
                gap: "10px",
                backgroundColor: state?.background,
                color: state?.color,
              }}
            >
              <div>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <h3>{item.name}</h3>

                <p>
                  ₹{item.price} X {item.quantity} = ₹
                  {item.price * item.quantity}
                </p>
                <Button
                  label={"Remove"}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                />
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: "20px",
              fontWeight: "bold",
              textAlign: "right",
              borderTop: "1px solid #ccc",
              paddingTop: "10px",
              fontSize: "18px",
            }}
          >
            Total: ₹
            {state?.cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </div>
        </div>
      )}
    </>
  );
}
