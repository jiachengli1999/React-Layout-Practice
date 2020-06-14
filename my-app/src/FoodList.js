import React, { Component } from 'react'
import './styles/FoodList.css'
import ReactModal from 'react-modal'
import Rating from './Rating.js'
import { Link } from 'react-router-dom'

class FoodList extends Component{
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
        console.log(this.props.food)
        return (
            <div>
                {this.props.food.map(obj => (
                    <div className='food' key={obj.id}>
                        <img src={obj.image}  onClick={this.OpenModal}  data-name={obj.title} data-price={obj.price}/>
                        <label>{obj.title}, </label>
                        <label>${obj.price}</label>
                    </div>
                ))}
                <ReactModal 
                isOpen={this.state.showModal} 
                onRequestClose={this.CloseModal}
                ariaHideApp={false}
                className='Modal'>
                    <div>{this.state.item_name}</div>
                    <div>${this.state.item_price}</div>
                    <div className='button-layer'>
                        <button onClick={this.CloseModal}>Close</button>
                        <button>Add to Cart</button>
                        <Link to="/Rating" className="btn btn-primary">Rate</Link>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default FoodList