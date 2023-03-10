import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className="cart">
        <Button size="lg" variant="solid" colorScheme="green">
          <span className="material-symbols-outlined">Carrito</span>
          <span>{": " + quantity}</span>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;