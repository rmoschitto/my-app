// Below commented out is our grocery app paired.

// import React from 'react';
// import GroceryListPaired from './GroceryListPaired'
// import './App.css'
//
// export default class App extends React.Component {
//     state = {
//         items: ['Milk', 'Cheese', 'Pork Butt', 'Brisket']
//     }
//     render() {
//         return (
//             <div className={"groceries"}>
//                 <h1>Grocery List</h1>
//                 <p>Need to buy for smoking</p>
//                 <GroceryListPaired myList={this.state.items}/>
//             </div>
//         )
//     }
// }
//


import React from "react";
import GroceryListItem from "./GroceryListItem";
export default class GroceryList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: ['Apple', 'Banana', 'Strawberry', "Grapes"],
            newItem: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            const items = [...this.state.items];
            items.push('Oranges')
            const newState = {
                items
            }
            this.setState(newState)
        }, 2000)
    }
    addItem() {
        const items = [...this.state.items];
        items.push(this.state.newItem)
        const newState = {
            items,
            newItem: ''
        }
        this.setState(newState);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <GroceryListItem name={item} key={index} />
                    })}
                </ul>
                <input
                    value={this.state.newItem}
                    type={'text'}
                    onChange={(event) => {
                        this.setState({
                            newItem: event.target.value
                        })
                    }}
                />
                <button onClick={() => this.addItem()}>Add Item</button>
            </div>
    )
    }
}