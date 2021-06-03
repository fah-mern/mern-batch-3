
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import {products} from './Data.js'


function App() {

  return (
    <div className='container'>
      <Header/>
      <hr/>
      <Home product={products}/>
      <hr/>
    
    
    </div>
  );
}

export default App;
