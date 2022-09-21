import {
  CheckOutContainer,
  CheckoutAd,
  CheckoutLeftPane,
  CheckoutRightPane,
  CheckoutItems,
  CheckoutTitle,
  CheckoutSubTotal,
  CheckoutSubtotalGift,
  CheckoutButton,
  CartItemsContainer,
} from "./checkout.styles";

import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getItemsFromCart } from "../../store/cart.slice";
import CartItem from "../../components/cart-item/cart-item.component";
import { getUser } from "../../store/user.slice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cartItems = useSelector(getItemsFromCart);
  const user = useSelector(getUser);
  const navigate = useNavigate();
  console.log("cartItems:", cartItems);

  const cartItemsTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price;
    }
    return total;
  };

  const checkOutBtnHandler = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("add products to the cart to go to payment page.");
      navigate("/");
      return;
    }
    navigate("/payment");
  };

  return (
    <CheckOutContainer>
      <CheckoutLeftPane>
        <CheckoutAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
        <CheckoutItems>
          {user && <h3>Hello, {user?.displayName}</h3>}
          <CheckoutTitle>Your shopping Basket</CheckoutTitle>
          <CartItemsContainer>
            {cartItems.map((item) => {
              const { title, img, price, rating, id, qty } = item;

              return (
                <CartItem
                  key={id}
                  id={id}
                  title={title}
                  img={img}
                  price={price}
                  rating={rating}
                  qty={qty}
                />
              );
            })}
          </CartItemsContainer>
        </CheckoutItems>
      </CheckoutLeftPane>
      <CheckoutRightPane>
        <CheckoutSubTotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal({cartItems.length} items):{" "}
                  <strong>{`${value}`}</strong>
                </p>
                <CheckoutSubtotalGift>
                  <input type="checkbox" /> This order contains a gift
                </CheckoutSubtotalGift>
              </>
            )}
            decimalScale={2}
            value={cartItemsTotal()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
          <CheckoutButton onClick={checkOutBtnHandler}>
            Proceed to Checkout
          </CheckoutButton>
        </CheckoutSubTotal>
      </CheckoutRightPane>
    </CheckOutContainer>
  );
}
