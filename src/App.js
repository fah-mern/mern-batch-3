
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


function App() {

  return (
    <div className='container'>
      <Router>
      <Header/>
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

     <Route path="*">
    <Notfound/>
     </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
