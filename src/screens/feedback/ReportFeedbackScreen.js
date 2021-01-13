import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Button, Platform, Linking, TouchableOpacity} from "react-native";

import FeedbackDetail from './DetailFeedbackScreen'
import SearchLoc from '../SearchScreen'

export default function ReportFeedbackScreen ({ navigation }) {
		return <SafeAreaView style = {{padding:15}}>
			<Text>What's on your mind?</Text>
			<Button
				title='General Feedback'
				onPress={() => navigation.navigate('Feedback Detail')}
			/>
			<Button
				title='Specific Location'
				onPress={() => navigation.navigate('Search')}
			/>
		</SafeAreaView>
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
	}
});
