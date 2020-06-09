import React, {Component} from 'react'
import ReactModal from 'react-modal'

class Modal extends Component{
    constructor(props, name, price){
        super(props)
        this.name = name
        this.price = price
        this.state = ({
            showModal: true,
        })
    }

    handleClose(){
        this.setState({showModal: false})
    }

    render(){
        return(
            <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleClose}>
                <h2>{this.name}</h2>
                {this.price}
            </ReactModal>
        )
    }
}

export default Modal