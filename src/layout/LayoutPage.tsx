import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { NavBar } from "../components/NavBar";

export const LayoutPage = ({ children }) => {
  const { darkMode } = useContext(ProductContext);
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
