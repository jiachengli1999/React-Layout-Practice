import React, {Component} from 'react'
import { FaStar } from 'react-icons/fa'
import './styles/Rating.css'

class Rating extends Component{
    constructor(){
        super()
        this.state= ({
            currentRating: null,
            hover: null,
        })
        this.changeColor = this.changeColor.bind(this)
        this.resetColor = this.resetColor.bind(this)
    }

    changeColor(e){
        const val = e.target.value 
        this.setState({currentRating: val})
    }

    resetColor(){
        this.setState({currentRating: 0})
    }

    render(){
        return (
            <div>
                <div className='rating-form'>
                    <div className='title'>Saled</div>
                    <div className='rating-box'>
                        {[...Array(5)].map((e, index) => { 
                            const val = index + 1;  
                            return(
                                <label key={index}>
                                    <input type='radio' name='radio-btn' value={val} 
                                           onClick={()=> this.setState({currentRating: val})}/>
                                    <FaStar className='star' size={100} value={val}
                                            color={ val <= (this.state.currentRating || this.state.hover)
                                                ? 'yellow' : ''}
                                            onMouseEnter={() => this.setState({hover: val})}
                                            onMouseLeave={() => this.setState({hover: 0})}/>                                            
                                </label>
                            )
                        })}
                    </div>
                    <div className='rating-btn'>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rating 