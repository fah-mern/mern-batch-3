import React from 'react'
import Card from '../../components/card/card'
import Slider from '../../components/slider/Slider'
 function Home() {
    return (
        <div>
            <Slider/>
    <div className='home-wrapper' style={{paddingTop:"30px",paddingBottom:"30px"}}>
    <div className='row'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>

    </div>
        </div>
    )
}

export default Home;
