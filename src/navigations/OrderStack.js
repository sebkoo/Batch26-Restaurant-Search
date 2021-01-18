import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OrderScreen from '../screens/OrderScreen'
import TypeScreen from '../screens/menu/TypeScreen'
import MenuScreen from '../screens/menu/MenuScreen'
import MenuDetailScreen from '../screens/menu/MenuDetailScreen'

import BurgerScreen from '../screens/menu/BurgerScreen'
import HotDogScreen from '../screens/menu/HotDogScreen'
import SandwichScreen from '../screens/menu/SandwichScreen'
import FriesScreen from '../screens/menu/FriesScreen'
import DrinkScreen from '../screens/menu/DrinkScreen'
import ShakeScreen from '../screens/menu/ShakeScreen'

// import BurgerDetailScreen from '../screens/detail/BurgerDetailScreenDetail'
// import HotDogDetailScreen from '../screens/detail/HotDogDetailScreen'
// import SandwichDetailScreen from '../screens/detail/SandwichDetailScreen'
// import FriesDetailScreen from '../screens/detail/FriesDetailScreen'
// import DrinkDetailScreen from '../screens/detail/DrinkDetailScreen'
// import ShakeDetailScreen from '../screens/detail/ShakeDetailScreen'

const Stack = createStackNavigator()

export default function PrivacyStack() {
	return <Stack.Navigator>
		<Stack.Screen name='Order' component={OrderScreen} />
		<Stack.Screen name='Type' component={TypeScreen} />
		<Stack.Screen name='Menu' component={MenuScreen} />
		<Stack.Screen name='Menu Detail' component={MenuDetailScreen} />
		<Stack.Screen name='Burger' component={BurgerScreen} />
		<Stack.Screen name='HotDog' component={HotDogScreen} />
		<Stack.Screen name='Sandwich' component={SandwichScreen} />
		<Stack.Screen name='Fries' component={FriesScreen} />
		<Stack.Screen name='Drink' component={DrinkScreen} />
		<Stack.Screen name='Shake' component={ShakeScreen} />

		{/*<Stack.Screen name='BurgerDetail' component={BurgerDetailScreen} />*/}

		{/*<Stack.Screen name='HotDogDetail' component={HotDogDetailScreen} />*/}

		{/*<Stack.Screen name='SandwichDetail' component={SandwichDetailScreen} />*/}

		{/*<Stack.Screen name='FriesDetail' component={FriesDetailScreen} />*/}

		{/*<Stack.Screen name='DrinkDetail' component={DrinkDetailScreen} />*/}

		{/*<Stack.Screen name='ShakeDetail' component={ShakeDetailScreen} />*/}
	</Stack.Navigator>
}
