import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import OrderResult from "./pages/OrderResult";
import OrderForm from "./pages/OrderForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/OrderForm">
          {" "}
          <OrderForm />{" "}
        </Route>
        <Route path="/OrderResult">
          {" "}
          <OrderResult />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
