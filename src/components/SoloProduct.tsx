import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../App";
import { ProductContext } from "../context/ProductContext";

export const SoloProduct = () => {
  const { id } = useParams();
  const number: number = Number(id);
  const { products } = useContext(ProductContext);
  const producto = products[number];

  const carrito = (images: Product["images"]) => {
    const lengthNumber = images.length;
    return images[lengthNumber];
  };

  return (
    <div className="containerSoloProduct">
      {producto && (
        <div className="product" onClick={carrito}>
          <h2>{producto.title}</h2>
          <h3>{producto.id}</h3>
          <img src={`${producto.images[0]}`} />
        </div>
      )}
    </div>
  );
};
