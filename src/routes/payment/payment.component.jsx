import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/cart-item/cart-item.component";
import { getCartLength, getItemsFromCart } from "../../store/cart.slice";
import { getUser } from "../../store/user.slice";
import {
  PaymentContainer,
  PaymentItems,
  PaymentMethod,
  PaymentSection,
  PaymentTitle,
  PaymentUserAddress,
} from "./payment.styles";

export default function Payment(props) {
  const user = useSelector(getUser);
  const cartItems = useSelector(getItemsFromCart);
  const totalCartItems = useSelector(getCartLength);
  console.log(user);
  return (
    <PaymentContainer>
      <h1>
        Checkout (<Link to="/checkout">{totalCartItems} items</Link>)
      </h1>
      <PaymentSection>
        <PaymentTitle>
          <h3>Delivery Address</h3>
        </PaymentTitle>
        <PaymentUserAddress>
          <p>{user !== null && user.displayName}</p>
          <p>204, Raghavendra Residency</p>
          <p>Friends colony,Hyderabad</p>
        </PaymentUserAddress>
      </PaymentSection>
      <PaymentSection>
        <PaymentTitle>
          <h3>Review items and delivery</h3>
        </PaymentTitle>
        <PaymentItems>
          {cartItems.map((item) => {
            const { id, price, title, img, qty, rating } = item;
            return (
              <CartItem
                key={id}
                id={id}
                price={price}
                title={title}
                img={img}
                qty={qty}
                rating={rating}
              />
            );
          })}
        </PaymentItems>
      </PaymentSection>
      <PaymentSection>
        <PaymentTitle>
          <h3>Payment Method</h3>
        </PaymentTitle>
        <PaymentMethod></PaymentMethod>
      </PaymentSection>
    </PaymentContainer>
  );
}
