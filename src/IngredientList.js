import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IngredientList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.ingredients.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

ingredients.propTypes = {
    PropTypes.arrayOf(PropTypes.string).isRequired
};

export default componentName;