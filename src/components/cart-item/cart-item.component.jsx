import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeItem } from "../../store/cart.slice";
import {
  CartImage,
  CartItemContainer,
  CartItemInfo,
  CartItemRating,
  CartItemRemoveButton,
  CartItemTitle,
  CartQtyChange,
} from "./cart-item.styles";

export default function CartItem({ id, title, price, rating, img, qty }) {
  const dispatch = useDispatch();

  const removeButtonHandler = () => {
    console.log("id", id);
    dispatch(removeItem(id));
  };

  const increaseQtyHandler = () => {
    dispatch(increaseQty(id));
  };

  const decreaseQtyHandler = () => {
    if (qty === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(decreaseQty(id));
  };

  return (
    <CartItemContainer>
      <CartImage src={img} />
      <CartItemInfo>
        <CartItemTitle>{title}</CartItemTitle>
        <p>₹{price}</p>
        <CartItemRating>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </CartItemRating>
        <CartItemRemoveButton onClick={removeButtonHandler}>
          Remove from basket
        </CartItemRemoveButton>
        <CartQtyChange>
          <button onClick={decreaseQtyHandler}>-</button>
          <p>{qty}</p>
          <button onClick={increaseQtyHandler}>+</button>
        </CartQtyChange>
      </CartItemInfo>
    </CartItemContainer>
  );
}
