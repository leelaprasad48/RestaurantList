import { AppRegistry, Text, View } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import RestaurantList from './src/components/RestaurantList';

const App = () => {
return (
		<View style={{ flex: 1 }}>
			<Header heading='Restaurants'/>
			<RestaurantList />
		</View>
	);
};

AppRegistry.registerComponent('helloWorld', ()=> App);
