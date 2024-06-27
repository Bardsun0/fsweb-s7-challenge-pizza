import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Success from "./pages/Success";
import OrderPizza from "./pages/OrderPizza";
import Footer from "./components/Footer";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/OrderPizza">
          <OrderPizza setOrderData={setOrderData} />
        </Route>
        <Route path="/Success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

