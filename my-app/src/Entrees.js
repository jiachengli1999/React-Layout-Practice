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

    // componentDidMount(){
    //     fetch('http://localhost:8000/image_storage')
    //     .then(results => results.json())
    //     .then(
    //         results => {
    //             // get food pertaining to the category
    //             let imgs = results.map(img => {
    //                 if (img.category === this.props.category){
    //                     return img
    //                 }
    //             }).filter(i => { // get rid of undefined
    //                 return i != null
    //             })
    //             this.setState({images: imgs})
    //         }
    //     );
    // }

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
                {/* <div className='food'>
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
                </div> */}
                {this.props.food.map(obj => (
                    <div className='food' key={obj.id}>
                        <img src={obj.image} />
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
                    <button onClick={this.CloseModal}>Add to Cart</button>
                </ReactModal>
            </div>
        )
    }
}

export default Entrees