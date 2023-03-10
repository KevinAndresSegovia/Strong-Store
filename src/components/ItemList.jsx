import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ pesas }) => {
  return (
    <>
      <Container className="main-catalogo">
        {pesas?.map((pesa) => (
          <Item
            key={pesa.id}
            id={pesa.id}
            name={pesa.name}
            description={pesa.description}
            price={pesa.price}
            stock={pesa.stock}
            category={pesa.category}
            image={pesa.image}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;