import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const pesasCollection = collection(db, "pesas");
    getDocs(pesasCollection).then((querySnapshot) => {
      const pesas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(pesas);
    });
  }, []);

  return <ItemDetail pesas={data} />;
};

export default ItemDetailContainer;