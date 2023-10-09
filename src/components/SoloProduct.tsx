import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../App";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";
import "./SoloProduct.css";

export const SoloProduct = () => {
  const { id } = useParams();
  const number: number = Number(id);
  const { products } = useContext(ProductContext);
  const producto = products[number - 1];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carrito = (
    images: Product["images"],
    currentImageIndex: number,
    setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextImageIndex);
    console.log(currentImageIndex);
    console.log(producto.images);
  };

  return (
    <div className="cont">
      <div className="containerSoloProduct">
        {producto && (
          <div className="productoss">
            <div className="leftside">
              <h2>{producto.title}</h2>
              <h3>{producto.id}</h3>
              <img
                className="imageProduct"
                src={`${producto.images[currentImageIndex]}`}
                onClick={() =>
                  carrito(
                    producto.images,
                    currentImageIndex,
                    setCurrentImageIndex
                  )
                }
              />
            </div>
            <div className="rightside">
              <div className="content">
                <p>Marca: {producto.brand}</p>
                <p>Categoria: {producto.category}</p>
                <p>Descripcion: {producto.description}</p>
                <p>Precio: {producto.price}</p>
                <p>Rating: {producto.rating}/5</p>
                <p>Stock: {producto.stock}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
