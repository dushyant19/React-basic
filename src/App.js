import React,{Component} from 'react';
import './App.css';
import  {CardList} from './components/card-list/card-list.jsx';
import './components/card-list/card-list.css'
import {Search} from './components/Search-Box/Search.jsx';

class App extends Component{

  constructor(){
    super();

    this.state = {
      Monsters : [
      ],
      SearchField: "",
    };
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(newresponse => this.setState({Monsters:newresponse}))
}

  handlechange = e=>{
    this.setState({SearchField:e.target.value})
  }

  render() {
    const monster = this.state.Monsters;
    const SearchField = this.state.SearchField;
    const filtered = monster.filter(monster=>monster.name.toLowerCase().includes(SearchField.toLowerCase()))
    return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <Search placeholder = "search monster" handlechange={this.handlechange}></Search>
      <CardList Monsters = {filtered}>
        
      </CardList>
    </div>
    );
  }
}

export default App;
