import React, { Component } from 'react';

class RestaurantInput extends Component {
  render() {
    return (
      <div>
        Restaurant Input
        <form>
          <input type="text" name="name"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
