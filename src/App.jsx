import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Success from "./pages/Success";
import OrderPizza from "./pages/OrderPizza";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/OrderPizza">
          {" "}
          <OrderPizza />{" "}
        </Route>
        <Route path="/Success">
          {" "}
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
