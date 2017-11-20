import React, { Component } from 'react';
import Recipe from './Recipe.js'
import './RecipeApp.css';


class RecipeApp extends Component {
  render() {
    return (
      <div className='App'>
        <Recipe
          title='pasta'
          ingredients={["flour", "water"]}
          instructions='COOKING YOUR PASTA. Bring 4 - 6 quarts of water to a rolling boil, add salt to taste. Add contents of package to boiling water. Return to a boil. For authentic "al dente" pasta, boil uncovered, stirring occasionally for 9 minutes. Remove from heat. Serve immediately with your favorite Barilla sauce'
          image="https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Spaghetti-Pic__Photocredit-David-Loftus-LEDE.jpg?itok=-7KB2KCR"
        />
      </div>
    );
  }
}

export default RecipeApp;

