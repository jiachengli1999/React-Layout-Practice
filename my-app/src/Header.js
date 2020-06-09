import React, { Component } from 'react'
import './Header.css'
import Entrees from './Entrees.js'
class Header extends Component{
    constructor(){
        super()
        this.state=({
            currCategory: '',
        })
    }

    handleCategory = (data) =>{
        this.setState({currCategory: data})
        console.log(data)
    }

    render(){
        let category;
        switch(this.state.currCategory){
            case 'Entrees':
                category=<Entrees />
                break;
            // case 'Lifestyle Bowls':
            //     category=<LBowls />
            //     break;
            // case 'Drinks':
            //     category=<Drinks />
            //     break;
            // case 'Sides':
            //     category=<Sides />
            //     break;
            default:
                category=null;
        }
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
                        <ul>
                            <li onClick={() => this.handleCategory('Entrees')} >Entrees</li>
                            <li onClick={() => this.handleCategory('Lifestyle Bowls')} >Lifestyle Bowls</li>
                            <li onClick={() => this.handleCategory('Sides')} >Sides</li>
                            <li onClick={() => this.handleCategory('Drinks')} >Drinks</li>
                        </ul>
                    </div>
                    <div className='menu'>
                        {category}
                    </div>
                </div>
            </div>
        )
    }
   
}

export default Header