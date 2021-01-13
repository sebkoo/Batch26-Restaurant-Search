import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Button, Platform, Linking, TouchableOpacity} from "react-native";

import SpecificLoc from './ReportFeedbackScreen'

export default function CategoryFeedbackScreen ({ navigation }) {
	return <SafeAreaView style = {{padding:15}}>
		<Text>What's on your mind?</Text>
		<Button
			title='Compliment'
			onPress={() => navigation.navigate('Feedback Report')}
		/>
		<Button
			title='Issue'
			onPress={() => navigation.navigate('Feedback Report')}
		/>
		<Button
			title='Question'
			onPress={() => navigation.navigate('Feedback Report')}
		/>
		<Button
			title='Suggestion'
			onPress={() => navigation.navigate('Feedback Report')}
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
