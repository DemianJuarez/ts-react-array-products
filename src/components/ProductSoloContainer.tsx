import { useContext } from "react";
import { Product } from "../App";
import { ProductContext } from "../context/ProductContext";
import "./ProductSoloContainer.css";
import { Link } from "react-router-dom";

interface ProductSoloProps {
  p: Product;
}

export const ProductSoloContainer = (props: ProductSoloProps) => {
  const { p } = props;
  const { handleClickProduct } = useContext(ProductContext);

  const getDiscount = (
    price: Product["price"],
    discountPercentage: Product["discountPercentage"]
  ) => {
    const discount: number = discountPercentage / 100;
    const discountedPrice: number = price - price * discount;
    return discountedPrice;
  };

  const getPhoto = (images: Product["images"]) => {
    const randomNumber = Math.floor(Math.random() * images.length);
    return images[randomNumber];
  };

  return (
    <Link to={`/product/${p.id}`} onClick={handleClickProduct}>
      <div className="product">
        <img src={`${getPhoto(p.images)}`} />
        <h2>{p.title}</h2>
        <p>{p.description}</p>
        <p>{p.price}</p>
        <p>{getDiscount(p.price, p.discountPercentage).toFixed(2)}</p>
      </div>
    </Link>
  );
};
