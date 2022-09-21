import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";
import Error from "./routes/error/error.component";
import Checkout from "./routes/checkout/checkout.component";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/login/login.component";
import { useEffect } from "react";
import { onAuthStateChangedHandler } from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user.slice";
import Payment from "./routes/payment/payment.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHandler((user) => {
      if (user) {
        console.log("user", user);
        const { email, uid } = user;
        const payload = {
          displayName: email.split("@")[0],
          email,
          uid,
        };
        console.log(payload);
        dispatch(setUser(payload));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route exact path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
