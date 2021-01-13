import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PrivacyScreen from '../screens/PrivacyScreen'
import AgreementScreen from '../../src/screens/privacy/AgreementScreen'
import PolicyScreen from '../../src/screens/privacy/PolicyScreen'
import GuideScreen from '../../src/screens/privacy/GuideScreen'
import LicenseScreen from '../../src/screens/privacy/LicenseScreen'

// const navigator = createStackNavigator(
// 	{
// 		Agreement: AgreementScreen,
// 		Policy: PolicyScreen,
// 		Guide: GuideScreen,
// 		License: LicenseScreen
// 	},
// 	{
// 		initialRouteName: 'Feedback',
// 		defaultNavigationOptions: {
// 			title: 'Feedback'
// 		}
// 	}
// )
//
// export default createAppContainer(navigator)

const Stack = createStackNavigator()

export default function PrivacyStack() {
	return <Stack.Navigator>
		<Stack.Screen name='Privacy' component={PrivacyScreen} />
		<Stack.Screen name='Agreement' component={AgreementScreen} />
		<Stack.Screen name='Policy' component={PolicyScreen} />
		<Stack.Screen name='Guide' component={GuideScreen} />
		<Stack.Screen name='License' component={LicenseScreen} />
	</Stack.Navigator>
}
