import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../HOC/Aux";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meet: 2,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
      </Aux>
    );
  }
}