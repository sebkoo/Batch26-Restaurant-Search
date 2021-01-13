import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import FeedbackScreen from '../screens/FeedbackScreen'
import CategoryFeedbackScreen from '../screens/feedback/CategoryFeedbackScreen'
import ReportFeedbackScreen from '../screens/feedback/ReportFeedbackScreen'
import DetailFeedbackScreen from '../screens/feedback/DetailFeedbackScreen'
import SearchScreen from '../../src/screens/SearchScreen'

// const navigator = createStackNavigator(
// 	{
// 		Feedback: FeedbackScreen,
// 		Mind: CategoryFeedbackScreen,
// 		SpecificLoc: ReportFeedbackScreen,
// 		FeedbackDetail: DetailFeedbackScreen,
// 		SearchLoc: SearchScreen
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

export default function FeedbackStack() {
	return <Stack.Navigator>
		<Stack.Screen name='Feedback' component={FeedbackScreen} />
		<Stack.Screen name="Feedback Category" component={CategoryFeedbackScreen} />
		<Stack.Screen name="Feedback Report" component={ReportFeedbackScreen} />
		<Stack.Screen name="Feedback Detail" component={DetailFeedbackScreen} />
		<Stack.Screen name="Search" component={SearchScreen} />
	</Stack.Navigator>
}
