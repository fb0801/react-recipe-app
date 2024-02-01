import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

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
        {this.state.recipes.map((recipe) => {
            return <p>{recipe.recipe_id}</p>
        } ) }
      </div>
    );
  }
}

export default App;