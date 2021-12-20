import React, { Component } from 'react';
import { CardList } from './components/card-list/cart-list.component';
import { SeacrchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }



  render() {
    const { monsters, searchField } = this.state;
    const fillteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())

    )
    return (
      <div className='App'>
        <h1> Monster Rolodex</h1>
        <SeacrchBox placeholder='serach monster..' handleChange={this.handleChange}> </SeacrchBox>
        <CardList monsters={fillteredMonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;
