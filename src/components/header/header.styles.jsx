import styled from "styled-components";
import { SpanTwo } from "../navigation/navigation.styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
export const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;
export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

export const ShoppingIconContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
export const ShoppingIcon = styled(ShoppingBasketIcon)`
  color: white !important;
`;
export const ShoppingCount = styled(SpanTwo)`
  margin: 0 10px;
`;
