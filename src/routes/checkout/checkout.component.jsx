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
} from "./checkout.styles";

import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getItemsFromCart } from "../../store/cart.slice";

export default function Checkout() {
  const cartItems = useSelector(getItemsFromCart);

  const cartItemsTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price;
    }
    return total;
  };

  return (
    <CheckOutContainer>
      <CheckoutLeftPane>
        <CheckoutAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
        <CheckoutItems>
          <CheckoutTitle>Your shopping Basket</CheckoutTitle>
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
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </CheckoutSubTotal>
      </CheckoutRightPane>
    </CheckOutContainer>
  );
}
