import React from 'react'
import{useParams} from 'react-router-dom'
import Card from '../../components/card/card';
import { products } from '../../Data';
 function Products() {
    let {category} = useParams();

    const filteredProducts=products.filter(p=>p.category===category);
    return (
        <div className='row'> 
       <hr/>
            <h1><strong><center>{category.toUpperCase()}</center></strong></h1>
            <hr/>
            {
                filteredProducts.map(p=><Card key={p.id} products={p}/>)
            }
        </div>
    )
}

export default Products;