import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import OrderScreen from '../screens/OrderScreen'
import AboutScreen from '../screens/AboutScreen'
import ContactScreen from '../screens/ContactScreen'
import LocationScreen from '../screens/LocationScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'

import FeedbackNav from './FeedbackStack'
import PrivacyNav from './PrivacyStack'

import OrderNav from './OrderStack'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
	return <Drawer.Navigator initialRouteName='Order' >
			<Drawer.Screen name='Order' component={OrderNav} />
			<Drawer.Screen name='About' component={AboutScreen} />
			<Drawer.Screen name='Contact' component={ContactScreen} />
			<Drawer.Screen name='Locations' component={LocationScreen} />
			<Drawer.Screen name='Home' component={HomeScreen} />
			<Drawer.Screen name='Login' component={LoginScreen} />
			<Drawer.Screen name='Details' component={DetailScreen} />
			<Drawer.Screen name='Search' component={SearchScreen} />
			<Drawer.Screen name='Feedback' component={FeedbackNav} />
			<Drawer.Screen name='Privacy' component={PrivacyNav} />
	</Drawer.Navigator>
}

export default DrawerNavigator
