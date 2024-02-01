import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = ""


class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async(e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(``)

     const data = await api_call.json()
     this.setState({recipes: data.recipes})
  }
   

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
       <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;