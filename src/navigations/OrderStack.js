import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OrderScreen from '../screens/OrderScreen'
import TypeScreen from '../screens/TypeScreen'

const Stack = createStackNavigator()

export default function PrivacyStack() {
	return <Stack.Navigator>
		<Stack.Screen name='Order' component={OrderScreen} />
		<Stack.Screen name='Type' component={TypeScreen} />
	</Stack.Navigator>
}
