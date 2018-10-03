/* @flow */

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RestaurantDetail from './RestaurantDetail';

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
    };
  }

  state = { restaurantsJson: [] };
  componentWillMount() {
     fetch('http://api.jsonbin.io/b/5b4e051ca5a2f34ea6b67587/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
            restaurantsJson: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderRestaurants() {
    return this.state.restaurantsJson.map(restaurant => {
      return <RestaurantDetail key={restaurant.name} album={restaurant}/>;
    });
  }

  render() {
    return (
        <ScrollView>
            {this.state.restaurantsJson && this.renderRestaurants()}
        </ScrollView>
    );
  }
}
export default RestaurantList;
