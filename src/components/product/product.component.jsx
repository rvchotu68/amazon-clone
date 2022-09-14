import {
  ProductContainer,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductBtn,
} from "./product.styles";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart.slice";

export default function Product({ id, title, price, rating, img }) {
  const dispatch = useDispatch();
  console.log("product ");
  const addToCartHandler = () => {
    const payload = {
      id,
      title,
      img,
      price,
      rating,
    };
    console.log(addToCart(payload));
    dispatch(addToCart(payload));
  };

  return (
    <ProductContainer>
      <ProductInfo>
        <p>{title}</p>
        <ProductPrice>
          <small>₹</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </ProductRating>
      </ProductInfo>
      <ProductImg src={img} />
      <ProductBtn onClick={addToCartHandler}>Add to basket</ProductBtn>
    </ProductContainer>
  );
}
