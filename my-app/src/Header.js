import React, { Component } from 'react'
import './styles/Header.css'
import FoodList from './FoodList.js'


class Header extends Component{
    constructor(){
        super()
        this.state=({
            currCategory: '',
            categories: [],
            images: [],
            indexes: 0,
        })

    }

    componentDidMount(){
        fetch('http://localhost:8000/image_storage')
        .then(results => results.json())
        .then(
            // results => this.setState({images: results})
            results => {
                // get unique categories
                let new_categories = Array.from(new Set(results.map(img => img.category)))
                // get all objects 
                this.setState({categories: new_categories, images: results})
            }
        );
    }

    handleCategory = (data) =>{
        this.setState({currCategory: data})
        console.log(data)
    }

    render(){
        console.log(this.state.images)
        // get the food for the current category
        let food_items = this.state.images.map(img => {
            if (img.category === this.state.currCategory){
                return img
            }
        }).filter(i => { // get rid of undefined
            return i != null
        })
        console.log("foods:")
        console.log(food_items)

        return (
            <div className='App'>
                <div className='Navs'>
                    <label>Stuff1</label>
                    <label>Stuff2</label>
                    <label>Stuff3</label>
                    <label>Stuff4</label>
                </div>
                <div className='name_row'>
                    <div className='category_name'>
                        <h2>Categories</h2>
                    </div>
                    <div className='curr_category'> 
                        <h2>McDonald's {this.state.currCategory}</h2>
                    </div>
                </div>
                <div className='menu_row'>
                    <div className='categories'>
                        {/* <ul>
                            <li onClick={() => this.handleCategory('Entrees')} >Entrees</li>
                            <li onClick={() => this.handleCategory('Lifestyle Bowls')} >Lifestyle Bowls</li>
                            <li onClick={() => this.handleCategory('Sides')} >Sides</li>
                            <li onClick={() => this.handleCategory('Drinks')} >Drinks</li>
                        </ul> */}
                        <ul>
                            {this.state.categories.map(category =>(
                                <li key={this.state.categories.indexOf(category)}
                                onClick={() => this.handleCategory(category)}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                    <div className='menu'>
                        {this.state.currCategory !== ''? <FoodList category={this.state.currCategory} food={food_items}/> : ''}
                    </div>
                </div>
            </div>
        )
    }
   
}

export default Header