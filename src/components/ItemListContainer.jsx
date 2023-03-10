import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [pesas, setPesas] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const pesasCollection = collection(db, "pesas");
    getDocs(pesasCollection).then((querySnapshot) => {
      const pesas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPesas(pesas);
    });
  }, []);

  const catFilter = pesas.filter((pesa) => pesa.category === category);

  return (
    <div>
      {category ? <ItemList pesas={catFilter} /> : <ItemList pesas={pesas} />}
    </div>
  );
};

export default ItemListContainer;