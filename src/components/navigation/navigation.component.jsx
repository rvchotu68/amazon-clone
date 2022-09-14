import { NavContainer, NavOption, SpanOne, SpanTwo } from "./navigation.styles";

export default function Navigation() {
  return (
    <NavContainer>
      <NavOption>
        <SpanOne>Hello guest</SpanOne>
        <SpanTwo>SignIn</SpanTwo>
      </NavOption>
      <NavOption>
        <SpanOne>Returns</SpanOne>
        <SpanTwo>& Orders</SpanTwo>
      </NavOption>
      <NavOption>
        <SpanOne>Your</SpanOne>
        <SpanTwo>Prime</SpanTwo>
      </NavOption>
    </NavContainer>
  );
}
