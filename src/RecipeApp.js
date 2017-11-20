import React, { Component } from 'react';
import Recipe from './Recipe.js'
import RecipeList from "./RecipeList.js";
import './RecipeApp.css';
import Navbar from "./Navbar";


class RecipeApp extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;

