import React from 'react';
import GroceryList from './GroceryList'
import './App.css'

export default class App extends React.Component {
    state = {
        items: ['Milk', 'Cheese', 'Pork Butt', 'Brisket']
    }
    render() {
        return (
            <div className={"groceries"}>
                <h1>Grocery List</h1>
                <p>Need to buy for smoking</p>
                <GroceryList myList={this.state.items}/>
            </div>
        )
    }
}