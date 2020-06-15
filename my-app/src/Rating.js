import React, {Component} from 'react'
import { FaStar } from 'react-icons/fa'
import './styles/Rating.css'

class Rating extends Component{
    constructor(){
        super()
        this.state= ({
            currentRating: null,
            hover: null,
            reviews: ['Select your rating', 'Terrible', 'Bad', 'Moderate', 'Great', 'Excellent'],
            current_review: 'Select your rating',
            clicked: false,
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

    handleMouseEnter(){

    }
    render(){
        return (
            <div>
                <div className='rating-form'>
                    <div className='title'>Saled</div>
                    <div className='rating-box'>
                        <div className='rating'>
                            {[...Array(5)].map((e, index) => { 
                                const val = index + 1;  
                                return(
                                    <label key={index}>
                                        <input type='radio' name='radio-btn' value={val} 
                                            onClick={()=> this.setState({
                                                currentRating: val, 
                                                current_review: this.state.reviews[val],
                                                clicked: true,
                                            })
                                        }/>

                                        <FaStar className='star' size={25} value={val}
                                                color={ val <= (this.state.currentRating || this.state.hover)
                                                    ? 'yellow' : ''}
                                                onMouseEnter={() => {
                                                    this.setState({
                                                        hover: val,
                                                        current_review: this.state.reviews[val]
                                                    })
                                                }}
                                                onMouseLeave={() => {
                                                    if (!this.state.clicked){
                                                        this.setState({
                                                            current_review: this.state.reviews[0]
                                                        })
                                                    }
                                                    this.setState({
                                                        hover: 0,
                                                    })
                                                }}/>                                            
                                    </label>
                                )
                            })}
                            <div className='rating-num'>{this.state.current_review}</div>
                        </div>
                        <div className='user-review'>
                            <textarea placeholder='Write a review...'/>
                        </div>
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