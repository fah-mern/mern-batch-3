import React,{useState} from 'react'
import Card from '../../components/card/card'
import Slider from '../../components/slider/Slider'



 function Home(props) {
    const [products,setProducts]= useState(props.product);
    return (
        <div>
            <Slider/>
    <div className='home-wrapper' style={{paddingTop:"30px",paddingBottom:"30px"}}>
    <div className='row'>
                
{
    products.map(p=><Card key={p.id}  products={p}/>)
}
            </div>

    </div>
        </div>
    )
}

export default Home;
