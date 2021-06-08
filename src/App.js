
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import {products} from './Data.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Notfound from "./pages/notfound/Notfound";
import ProductDetail from "./pages/productDetail/productDetail";
import Products from "./pages/products/Products";


function App() {

  return (
    <div className='container'>
      <Router>
      <Header/>
      <br/>
        <Switch>

     <Route exact path="/account/login">
<Login/>
     </Route>

     <Route exact  path="/account/register">
<Register/>
     </Route>

     <Route exact  path="/">
     <hr/>
     <Home product={products}/>
     </Route>

     <Route exact path="/product/:slug">
    <ProductDetail/>
     </Route>

     <Route exact path="/collection/:category">
  <Products/>
     </Route>

     <Route path="*">
    <Notfound/>
     </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
