import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LayoutPage } from "./layout/LayoutPage";
import { ProductPage } from "./pages/ProductPage";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutPage>
              <HomePage />
            </LayoutPage>
          }
        />
        <Route
          path="/product/:id"
          element={
            <LayoutPage>
              <ProductPage />
            </LayoutPage>
          }
        />
      </Routes>
    </ProductProvider>
  );
}

export default App;
