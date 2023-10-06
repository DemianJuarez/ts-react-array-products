import { ReactNode, createContext, useState } from "react";
import { Product } from "../App";

export const ProductContext = createContext<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}>({});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  /*   const changeVisualMode = () => {
    setDarkMode(!darkMode);
    console.log(
      "🚀 ~ file: ProductContext.tsx:10 ~ changeVisualMode ~ darkMode:",
      darkMode
    );
  }; */

  return (
    <ProductContext.Provider
      value={{
        darkMode,
        setDarkMode,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
