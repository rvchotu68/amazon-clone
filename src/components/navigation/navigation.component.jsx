import { useDispatch, useSelector } from "react-redux";
import { getUser, removeUser } from "../../store/user.slice";
import { signOutHandler } from "../../utils/firebase/firebase.utils";
import {
  NavContainer,
  NavOption,
  SpanOne,
  SpanTwo,
  NavLoginBtn,
} from "./navigation.styles";

export default function Navigation() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const signOutFunction = async (e) => {
    e.preventDefault();
    await signOutHandler();
    dispatch(removeUser(null));
  };

  return (
    <NavContainer>
      {user === null ? (
        <NavLoginBtn to="/login">
          <NavOption>
            <SpanOne>Hello guest</SpanOne>
            <SpanTwo>SignIn</SpanTwo>
          </NavOption>
        </NavLoginBtn>
      ) : (
        <NavOption>
          <SpanOne>Hello, {user.displayName}</SpanOne>
          <SpanTwo onClick={signOutFunction}>SignOut</SpanTwo>
        </NavOption>
      )}
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
