import { useContext, useEffect } from "react";
import { Product } from "../App.tsx";
import { ProductSoloContainer } from "./ProductSoloContainer.tsx";
import "./Container.css";
import { ProductContext } from "../context/ProductContext.tsx";

export const Container = () => {
  const { products, setProducts } = useContext(ProductContext);
  useEffect(() => {
    const getData = async () => {
      const api = "https://dummyjson.com/products";
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data.products);
    };
    getData();
  }, []);

  return (
    <div className="container">
      {products.map((p: Product) => (
        <div key={p.id}>
          <ProductSoloContainer p={p} />
        </div>
      ))}
    </div>
  );
};
