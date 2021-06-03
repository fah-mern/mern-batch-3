import React ,{useState}from 'react'
import logo from '../../assets/1.jpg'
 function Card(props) {

  const [products,setProducts]= useState(props.products);
    return (
        <div className='col-md-4 mb-4'>
            <div className="card">
  <img src={logo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{products.title}</h5>
    <p className="card-text">{products.description}}</p>
    <a href="#" className="btn btn-primary">Add to Bucket</a>
  </div>
</div>
            
        </div>
    )
}

export default Card;


