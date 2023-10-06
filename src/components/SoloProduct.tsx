import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../App.tsx";
import { ProductContext } from "../context/ProductContext";

export const SoloProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product: Product = products[id];
  return <div className="containerSoloProduct"></div>;
};
