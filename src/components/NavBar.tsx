import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import "./NavBar.css";

export const NavBar = () => {
  const location = useLocation();
  const { changeVisualMode, darkMode } = useContext(ProductContext);

  const isProductSoloPage = location.pathname.startsWith("/product/");

  return (
    <>
      <nav className="navbar">
        {isProductSoloPage && (
          <Link to="/" className="linkNavbar">
            Volver
          </Link>
        )}
        <p>Product Storeee</p>
      </nav>
    </>
  );
};
