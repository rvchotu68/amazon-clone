import {
  HeaderContainer,
  Logo,
  ShoppingIconContainer,
  ShoppingCount,
  ShoppingIcon,
} from "./header.styles";
import Search from "../search/search.component";
import Navigation from "../navigation/navigation.component";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartLength } from "../../store/cart.slice";

export default function Header() {
  const totalCartItems = useSelector(getCartLength);
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
        <Search />
        <Navigation />
        <ShoppingIconContainer>
          <Link to="/checkout">
            <ShoppingIcon />
          </Link>
          <ShoppingCount>{totalCartItems}</ShoppingCount>
        </ShoppingIconContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
