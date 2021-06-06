import React ,{useState}from 'react'
import logo from '../../assets/1.jpg'
import {Link} from 'react-router-dom'
 function Card(props) {

  const [products,setProducts]= useState(props.products);
    return (
        <div className='col-md-4 mb-4'>
            <div className="card">
  <img src={logo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{products.title}</h5>
    <p className="card-text">{products.description}}</p>
    <Link to={`/product/${products.slug}`} className="btn btn-primary">Add to Bucket</Link>
  </div>
</div>
            
        </div>
    )
}

export default Card;


