import React from 'react'
import burrito from './entrees_pics/burrito.PNG'
import burrito_bowl from './entrees_pics/burrito_bowl.PNG'
import one_taco from './entrees_pics/one_taco.PNG'
import three_tacos from './entrees_pics/three_tacos.PNG'
import saled from './entrees_pics/saled.PNG'
import './Entrees.css'

function Entrees(){
    return (
        <div>
            <div className='food'>
                <img src={burrito}/>
                <label>Burrito, </label>
                <label className='price'>$6.00</label>
            </div>
            <div className='food'>
                <img src={burrito_bowl}/>
                <label>Burrito Bowl, </label>
                <label className='price'>$7.00</label>
            </div>
            <div className='food'>
                <img src={one_taco}/>
                <label>One Taco, </label>
                <label className='price'>$3.00</label>
            </div>
            <div className='food'>
                <img src={three_tacos}/>
                <label>Three Tacos, </label>
                <label className='price'>$8.00</label>
            </div>
            <div className='food'>
                <img src={saled}/>
                <label>Saled, </label>
                <label className='price'>$3.00</label>
            </div>
        </div>
    )
}

export default Entrees