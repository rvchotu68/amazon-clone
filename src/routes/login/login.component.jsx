import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserAuthUsingEmailAndPassword,
  singInAuthEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import {
  LoginContainer,
  LoginImg,
  LoginDetails,
  LoginTitle,
  LoginForm,
  LoginBtn,
  LoginCreateAccountBtn,
} from "./login.styles";

export default function Login(props) {
  const navigate = useNavigate();
  const formInitialState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(formInitialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    try {
      const user = await singInAuthEmailAndPassword(email, password);
      console.log("user", user);
      if (user) navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const createAccountHandler = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    try {
      const user = await createUserAuthUsingEmailAndPassword(email, password);
      console.log("user:", user);
      if (user) navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <LoginContainer>
      <Link to="/">
        <LoginImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" />
      </Link>
      <LoginDetails>
        <LoginTitle>Sign-In</LoginTitle>
        <LoginForm>
          <label htmlFor="email">
            E-mail
            <input
              type="text"
              value={form.email}
              id="email"
              onChange={onChangeHandler}
              name="email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              value={form.password}
              id="password"
              name="password"
              onChange={onChangeHandler}
            />
          </label>
          <LoginBtn onClick={signInHandler}>Sign In</LoginBtn>
        </LoginForm>
        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <LoginCreateAccountBtn onClick={createAccountHandler}>
          Create your Amazon Account
        </LoginCreateAccountBtn>
      </LoginDetails>
    </LoginContainer>
  );
}
