import React, { Component } from 'react'
import burrito from './entrees_pics/burrito.PNG'
import burrito_bowl from './entrees_pics/burrito_bowl.PNG'
import one_taco from './entrees_pics/one_taco.PNG'
import three_tacos from './entrees_pics/three_tacos.PNG'
import saled from './entrees_pics/saled.PNG'
import './Entrees.css'
import ReactModal from 'react-modal'

class Entrees extends Component{
    constructor(){
        super()
        this.state = ({
            showModal: false,
            item_name: '',
            item_price: '',
        })
        this.OpenModal = this.OpenModal.bind(this)
        this.CloseModal = this.CloseModal.bind(this)
    }

    OpenModal(e){
        const name = e.target.dataset.name
        const price = e.target.dataset.price
        console.log(name, price)
        this.setState({showModal: true, item_name: name, item_price: price})
    }

    CloseModal(){
        this.setState({showModal: false})
    }

    render(){
        return (
            <div>
                <div className='food'>
                    <img src={burrito} onClick={this.OpenModal} data-name='burrito' data-price='6.00'/>
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
                <ReactModal 
                isOpen={this.state.showModal} 
                onRequestClose={this.CloseModal}
                ariaHideApp={false}
                className='Modal'>
                    <div>{this.state.item_name}</div>
                    <div>${this.state.item_price}</div>
                    <button onClick={this.CloseModal}>Add to Cart</button>
                </ReactModal>
            </div>
        )
    }
}

export default Entrees