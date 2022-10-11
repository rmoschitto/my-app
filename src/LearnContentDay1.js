import React from 'react';
import ReactDOM from 'react-dom/client';

///// App.js
import React from 'react';
import FruitList from './FruitList'
import './App.css'
export default class App extends React.Component {
  state = {
    fruits: ['Apple', 'Banana', 'Dragonfruit', 'Durian']
  }
  render() {
    return (
        <div className={"cats"}>
          <h1>Hello World</h1>
          <p>React is Awesome</p>
          <FruitList myList={this.state.fruits}/>
        </div>
    )
  }
}
//////////// FruitList.js
import React from 'react';
// export default class FruitList extends React.Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const items = this.props.myList.map((element, id) => {
//             return <li>{element}</li>
//         })
//
//         return (
//             <div>
//                 <ul>
//                     {items}
//                 </ul>
//             </div>
//         );
//     }
// }
export default function FruitList({myList}) {
  const items = myList.map((element, id) => {
    return <li key={id}>{element}</li>
  })
  return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
  );
}

const HelloWorld = () => {
  return (
    <h1>Hello World</h1>
  )
}
export default HelloWorld;

/*
import Child from './Child';
ReactDOM.render(

const Parent = () => (
<div>
    <h1>I am the parent!</h1>
    <Child />
    </div>
);
export default Parent;

const Child =() => (
<div>I am a child!</div>
);
export default Child;
 */

import Student from './Studen';
const Profile = () => (
    <div>
      <h1> Student Profile </h1>
      <Student />
    </div>
)
export default Profile;




import React from 'react';
// return an unordered list of items from the props object
const GroceryList = (props) => {
  return <li key={id}>{name}</li>
      <div>
        <ul>
          {names}
        </ul>
      </div>

}


export default GroceryList


const output = items.map((element) => {
    return <li>{element}</li>
})