import React, { Component } from "react";

class Recipe extends Component {
    render() {
        const ingredients = this.props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))
        return (
            <div>
                Hello {this.props.title}
                <ul>
                    {ingredients}
                </ul>
            </div>
        )
    }
}
export default Recipe