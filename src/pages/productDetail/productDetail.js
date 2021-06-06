import React from 'react'
import {useParams} from 'react-router-dom'
import { products } from '../../Data';

function ProductDetail() {
    let {slug}=useParams();

    const p=products.find(p=>p.slug===slug);

    return (
        <div>
            <h1>Product Detail Page</h1>
    
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>Price: <strong>PKR. {p.price}</strong></p>
            <p>Stock: {p.stock}</p>
           
        </div>
    )
}

export default ProductDetail;
