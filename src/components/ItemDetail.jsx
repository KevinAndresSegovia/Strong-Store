import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  import { useEffect, useState } from "react";
  import { doc, getDoc, getFirestore } from "firebase/firestore";
  
  const ItemDetail = ({ pesas }) => {
    const { id } = useParams();
  
    const [producto, setProducto] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
  
      const pesaRef = doc(db, "pesas", `${id}`);
  
      getDoc(pesaRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto(snapshot.data());
        } else {
          console.log("No such document!");
        }
      });
    }, []);
  
    const pesaFilter = pesas.filter((pesa) => pesa.id == id);
  
    return (
      <>
        {pesaFilter.map((pesa) => (
          <div key={pesa.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={pesa.image} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{pesa.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Description: {pesa.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Category: {pesa.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {pesa.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: U$D {pesa.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={pesa.stock}
                    id={pesa.id}
                    price={pesa.price}
                    name={pesa.name}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;