import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
//   }
// }

export default connect (mapStateToProps)(RestaurantsContainer);
