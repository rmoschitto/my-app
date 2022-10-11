import React from "react";

export default class GroceryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }

    onListItemClick(event) {
        console.log('I got clicked');
        this.setState({
            done: !this.state.done
        });
    }

    onmouseenter(event) {
        this.style = "bold";
    }


    render() {
        let style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };
        const items = this.props.myList.map((element, id)=> {
            return <li style={style} onClick={this.onListItemClick.bind(this)}>{element}</li>
        })
        return(
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}
