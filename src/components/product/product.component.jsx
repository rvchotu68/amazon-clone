import {
  ProductContainer,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductBtn,
} from "./product.styles";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, getItemsFromCart } from "../../store/cart.slice";

export default function Product({ id, title, price, rating, img }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(getItemsFromCart);
  console.log("product ");
  const addToCartHandler = () => {
    if (cartItems.length > 0) {
      console.log("cartItems", cartItems);
      console.log("id", typeof id);
      const index = cartItems.findIndex((item) => item.id === id);
      console.log("index", index);
      if (index >= 0) {
        alert(
          "item already added to the list. Please increase or decrease the qty at checkout page."
        );
        return;
      }
    }

    const payload = {
      id,
      title,
      img,
      price,
      rating,
      qty: 1,
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
